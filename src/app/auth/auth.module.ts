import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent
      }
    ]),
    FormsModule
  ]
})
export class AuthModule { }
