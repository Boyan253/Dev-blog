import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { LatestPostComponent } from './latest-post/latest-post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogHomeComponent,
    children: [
      { path: 'home', redirectTo: 'post', pathMatch: 'full' },
      { path: 'post', component: PostComponent },
      { path: 'subscribe', component: SubscribeComponent }
    ]
  },
  { path: 'about', component: AboutPageComponent },
  { path: 'latest-post', component: LatestPostComponent },
  { path: 'details/:id', component: BlogPostComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
