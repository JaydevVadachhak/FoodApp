import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthResponse} from "./auth-response";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {UserModel} from "./user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserModel | null>(null);
  private tokenExpireTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoXVsGZ2aDgm7inpz7LmSdxDESI4jLHmQ', {
      email,
      password,
      returnSecureToken: true
    });
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoXVsGZ2aDgm7inpz7LmSdxDESI4jLHmQ', {
      email,
      password,
      returnSecureToken: true
    }).pipe(
      // catchError(this.handleError),
      tap(response => {
        this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn);
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpireTimer) {
      clearTimeout(this.tokenExpireTimer);
    }
    this.tokenExpireTimer = null;
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if(!userData) {
      return;
    }
    const parsedUserData = JSON.parse(userData);
    const loadedUser: UserModel = new UserModel(parsedUserData.email, parsedUserData.id, parsedUserData._token, new Date(parsedUserData._tokenExpirationDate));
    if(loadedUser.token) {
      this.user.next(loadedUser);
      const duration = new Date(parsedUserData
        ._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogOut(duration);
    }
  }

  autoLogOut(expireTime: number) {
    this.tokenExpireTimer = setTimeout(() => {
      this.logout();
    }, expireTime);
  }

  private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, localId, idToken, expirationDate);
    this.user.next(user);
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let error = 'An unknown error occurred!';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(error);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        error = 'Email Already Exist';
    }
    return throwError(error);
  }
}
