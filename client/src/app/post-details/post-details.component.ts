import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import * as contentful from 'contentful';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: any;
  post: any;
  tags: any[] = [];
  constructor(private route: ActivatedRoute, private apiService: ServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      console.log(this.postId);

      const client = contentful.createClient({
        space: 'd2r7x1sflies',
        accessToken: 'arsLeKD_m-HpGAzLwzM8YQUL0WPsrwz7LKo1-5ch5Pw',
      });

      client.getEntry(this.postId).then(entry => {
        this.post = entry.fields;
        
        this.tags = entry.metadata.tags
        console.log(this.tags[0].sys.id);
        
      }).catch(error => {
        console.log(error);
      });
    });
  }
}
