import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthActivate } from '../core/guards/auth.activate';
import { EditComponent } from '../edit/edit.component';
import { OwnerActivate } from '../core/guards/owner.activate';
import { NoPageComponent } from '../no-page/no-page.component';


const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthActivate]
    }, {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate]

    }, 
    {
        path: 'edit/:id',
        component: EditComponent,
        canActivate: [OwnerActivate]
    },
    { path: '**', component: NoPageComponent }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
