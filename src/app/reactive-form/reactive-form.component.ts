import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }),
      'update': new FormControl(false),
      'hobbies': new FormArray([]),
    });
  }

  submitForm() {
    console.log(this.loginForm);
    this.loginForm.reset();
  }

  addHobby() {
    let control = new FormControl(null);
    (<FormArray>this.loginForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.loginForm.get('hobbies')).controls;
  }
}
