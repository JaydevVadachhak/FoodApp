import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsRoutingModule} from "./forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

@NgModule({
  declarations: [
    FormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ]
})
export class FormsDemoModule { }
