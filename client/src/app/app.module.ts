import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
