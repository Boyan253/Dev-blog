import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
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
  editMode: boolean = false;
  editedDescription: string = '';

  constructor(private route: ActivatedRoute, private apiService: ServiceService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];

      this.apiService.getPostDetails(this.postId).subscribe((res) => {
        this.post = res.singularPost;
      });
    });
  }

  get isOwner(): boolean {
    return this.userService.isOwner(this.post.ownerId);
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  onDescriptionInput(event: any): void {
    console.log('Description Input:', event.target.value);
    this.editedDescription = event.target.value;
}




  toggleEditMode(): void {
    // this.editedDescription = this.post.description;
    this.editMode = !this.editMode;
  }

  saveChanges(): void {
    // Update the description in the post object
    this.post.description = this.editedDescription;
    console.log(this.editedDescription);
    
console.log(this.post.description);

    // Call your service method to save changes
    this.apiService.updatePost(this.postId, this.post).subscribe(
      response => {
        console.log('Update successful:', response);
        this.editMode = false; // Disable edit mode
      },
      error => {
        console.log('Error updating post:', error);
      }
    );
}


  delete(): void {
    try {
      this.apiService.deletePost(this.postId).subscribe(
        response => {
          console.log('Delete successful:', response);
          this.router.navigate(['/']);
        },
        error => {
          console.log('Error deleting post:', error);
        }
      );
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}
