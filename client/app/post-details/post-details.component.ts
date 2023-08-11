import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import * as contentful from 'contentful';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId: any;
  post: any;
  tags: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ServiceService, private userService: UserService, private routerr: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];

      this.apiService.getPostDetails(this.postId).subscribe((res) => {

        // this.userService.isOwner(this.postId)


        this.post = res.singularPost
      })
    });
  }
  get isOwner() {



    return this.userService.isOwner(this.post.ownerId)

  } get isLoggedIn(): boolean {


    return this.userService.isLogged

  }
  delete() {
    try {
      this.apiService.deletePost(this.postId).subscribe(
        response => {
          console.log('Delete successful:', response);

          this.routerr.navigate(['/']);

        },
        error => {
          console.log('Error deleting post:', error);
        }
      );

    } catch (error) {

    }

  }

}
