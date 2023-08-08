import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppEmailDirective } from '../shared/validators/app-email.directive';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
