import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "./auth-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoXVsGZ2aDgm7inpz7LmSdxDESI4jLHmQ', {
      email,
      password,
      returnSecureToken: true
    });
  }

  login() {

  }
}
