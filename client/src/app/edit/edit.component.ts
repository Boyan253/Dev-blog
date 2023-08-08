import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  postData = {
    title: '',
    image: '',
    tags: '',
    description: '',
  };

  post: any; // Declare post variable
  postId: any; // Declare postId variable

  constructor(
    private fb: FormBuilder,
   
    private apiService: ServiceService, // Make sure you have ApiService imported and injected
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe(params => {
      this.postId = params['id']; // Convert to a number if it's a string

      // Fetch post details using apiService
      this.apiService.getPostDetails(this.postId).subscribe((res) => {
        this.post = res.singularPost;
         this.postData.title = this.post.title;
        this.postData.tags = this.post.tags;
        this.postData.description = this.post.description;
        // Assuming this.post.image is the URL of the image
        // You can handle the image differently, like preloading it and displaying it in the template
        this.postData.image = this.post.image;
      });
    });
  }

  async edit(form: NgForm): Promise<void> {
    if (form.invalid) {
      throw Error('form is invalid');
    }

    try {
      const base64Data = this.postData.image.split(",")[1];
      const binaryData = atob(base64Data);
      this.postData.image = btoa(binaryData);

      this.apiService.updatePost(this.postId, this.postData).subscribe(
        response => {
          console.log('Post updated successfully!', response);
        },
        error => {
          console.log('Error updating post:', error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.postData.image = e.target.result; // This should be a valid data URL
      };
      reader.readAsDataURL(file);
    }
  }
}
