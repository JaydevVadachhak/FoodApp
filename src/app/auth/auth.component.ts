import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "./auth-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    this.isLoading = true;
    let authObservable: Observable<AuthResponse>;
    if(this.isLoginMode) {
      authObservable = this.authService.login(authForm.value.email, authForm.value.password);
    } else {
      authObservable = this.authService.signUp(authForm.value.email, authForm.value.password);
    }
    authObservable.subscribe((response) => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
      }, error => {
      this.isLoading = false;
      if(error.error) {
        this.error = error.error.error.message;
      }
    });
    authForm.resetForm();
  }
}
