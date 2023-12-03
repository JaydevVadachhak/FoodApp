import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../auth/auth.guard";
import {FormComponent} from "./form/form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

const routes: Routes = [
  {
    path: 'td-form',
    canActivate: [AuthGuard],
    component: FormComponent
  },
  {
    path: 'reactive-form',
    canActivate: [AuthGuard],
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
