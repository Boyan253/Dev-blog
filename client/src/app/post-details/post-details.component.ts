import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private apiService: ServiceService, private userService: UserService) { }

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
}
