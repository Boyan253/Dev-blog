import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './user/register/register.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginComponent } from './user/login/login.component';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { CreateComponent } from './create/create.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    PostComponent,
    AboutComponent,
    BlogHomeComponent,
    AboutPageComponent,
    BlogPostComponent,
    PostDetailsComponent,
    LatestPostComponent,
    MenuComponent,
    RegisterComponent,
    RegisterPageComponent,
    LoginComponent,
    CreateComponent,
    CreatePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
     FormsModule,
     UserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
