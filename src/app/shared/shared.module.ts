import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {EllipsisPipe} from "./pipes/ellipsis.pipe";
import {ReversePipe} from "./pipes/reverse.pipe";
import {SpinnerComponent} from "./spinner/spinner.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    EllipsisPipe,
    ReversePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    EllipsisPipe,
    ReversePipe,
    CommonModule,
    NgbModule
  ]
})
export class SharedModule { }
