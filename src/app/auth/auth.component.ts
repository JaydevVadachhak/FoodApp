import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    this.isLoading = true;
    if(this.isLoginMode) {
      this.authService.login();
    } else {
      this.authService.signUp(authForm.value.email, authForm.value.password).subscribe((response) => {
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.error = error.error.error.message;
      });
    }
    authForm.resetForm();
  }
}
