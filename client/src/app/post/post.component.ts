import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as contentful from 'contentful';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  imageUrl: string = '';
  constructor(private apiService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    const client = contentful.createClient({
      space: 'd2r7x1sflies',
      accessToken: 'arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw',
    });

    client.getEntries().then((entries) => {
      this.posts = entries.items
console.log(this.posts);

    }).catch((error: any) => {
      console.log(error);
    });

    // Alternatively, you can also use the async/await syntax
    // async ngOnInit(): Promise<void> {
    //   try {
    //     const entries = await client.getEntries();
    //     this.posts = entries.items.map((entry: any) => entry.fields);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // Replace the code below with your existing logic for loading posts
    // this.apiService.loadPosts().subscribe(
    //   (value: any) => {
    //     this.posts = value;
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
  }

  goToDetails(post: any) {
    this.router.navigate(['/details', post.id]);
  }
}
