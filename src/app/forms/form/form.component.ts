import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('form') loginForm!: NgForm;
  userData = {
    email: '',
    password: '',
    update: ''
  }
  isSubmittedForm: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.isSubmittedForm = true;
    this.userData.email = this.loginForm.value.userData.email;
    this.userData.password = this.loginForm.value.userData.password;
    this.userData.update = this.loginForm.value.update;
    this.loginForm.resetForm();
  }
}
