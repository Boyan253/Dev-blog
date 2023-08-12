import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OwnerActivate } from './core/guards/owner.activate';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthActivate } from './core/guards/auth.activate';
import { NoPageComponent } from './no-page/no-page.component';

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
  { path: 'create', component: CreateComponent },

  { path: 'latest-post', component: LatestPostComponent },
  { path: 'details/:id', component: BlogPostComponent },
  { path: 'edit/:id', component: EditComponent, canActivate: [OwnerActivate] },
  { path: 'profile/:id', component: ProfilePageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
