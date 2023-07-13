import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './create/create.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AuthActivate } from './core/guards/auth.activate';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
    children: [
      { path: 'home', redirectTo: '/home', pathMatch: 'full' },
      { path: 'post', component: PostComponent },
      { path: 'subscribe', component: SubscribeComponent }
    ]
  },
  { path: 'about', component: AboutPageComponent },
  // { path: 'create', component: CreatePageComponent },

  { path: 'latest-post', component: LatestPostComponent },
  { path: 'details/:id', component: BlogPostComponent },
  {
    path: 'login',
    component:LoginComponent,
    canActivate: [AuthActivate]
}, {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate]

}, 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
