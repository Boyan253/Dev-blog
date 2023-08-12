import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  createError: string | null = null; // Declare loginError property


  form = this.fb.group({

    title: ["", [Validators.required,]],
    image: ["", [Validators.required,]],
    tags: ["", [Validators.required,]],
    description: ["", [Validators.required,]],


  });

  post: any; // Declare post variable
  postId: any; // Declare postId variable

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private apiService: ServiceService, // Make sure you have ApiService imported and injected
    private router: ActivatedRoute
    , private routerr: Router
  ) {
    this.router.params.subscribe(params => {
      this.postId = params['id']; // Convert to a number if it's a string

      // Fetch post details using apiService
      this.apiService.getPostDetails(this.postId).subscribe((res) => {
        this.post = res.singularPost;
        this.form.patchValue({
          title: this.post.title,
          tags: this.post.tags,
          description: this.post.description,

          // image: this.post.image
          // You can handle the image URL differently
          // if you don't want to populate it here
        });
      });

    });
  }

  async edit(): Promise<void> {
    if (this.form.value.description == '' || this.form.value.tags == '' || this.form.value.title == '') {
      this.createError = 'Form is invalid!'
      console.log(this.form.value);

      return
    }

    try {
      const postData = {
        title: this.form.value.title || '',
        image: this.form.value!.image || '',
        tags: this.form.value!.tags || '',
        description: this.form.value.description || '',

      };
      if (this.form.value.image != '') {
        const base64Data = postData.image.split(",")[1];
        const binaryData = atob(base64Data);
        postData.image = btoa(binaryData);
      }


      this.apiService.updatePost(this.postId, postData).subscribe(
        response => {
          console.log('Post updated successfully!', response);
          this.routerr.navigate(['/']);

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
        this.form.value.image = e.target.result; // This should be a valid data URL
      };
      reader.readAsDataURL(file);
    }
  }
}
