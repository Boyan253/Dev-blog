import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts: any[] = [];
  userId: string | null = null; // Initialize userId as null


  constructor(
    private apiService: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id'); // Use .get() to retrieve the parameter value
  
      this.apiService.loadProfilePosts(this.userId).subscribe(
        (value: any) => {
          this.posts = value;
          console.log(this.posts);
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
  

  goToDetails(post: any) {
    this.router.navigate(['/details', post.postId]);
  }
}
