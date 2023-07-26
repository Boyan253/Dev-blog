import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppEmailDirective } from '../shared/validators/app-email.directive';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class UserModule { }
