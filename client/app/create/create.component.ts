// ... Other imports and component code ...

import { Component, ViewChild } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { ServiceService } from "../service.service";
import { UserService } from "../user/user.service";
import { DEFAULT_EMAIL_DOMAINS } from "../shared/constants";
import { appEmailValidator } from "../shared/validators/app-email.validator";
import { matchPasswordsValidator } from "../shared/validators/match-password-validator";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  createError: string | null = null; // Declare loginError property
  form = this.fb.group({

    title: ["", [Validators.required,]],
    image: ["", [Validators.required,]],
    tags: ["", [Validators.required,]],
    description: ["", [Validators.required,]],


  });


  constructor(private fb: FormBuilder, private serviceService: ServiceService, private userService: UserService, private router: Router) {
  }

  async create(): Promise<void> {
    const postData = {
      title: this.form.value.title || '',
      image: this.form.value!.image || '',
      tags: this.form.value!.tags || '',
      description: this.form.value.description || '',
      ownerId: this.userService.user?.id,
      ownerEmail: this.userService.user?.email
    };
    if (this.form.invalid) {
      console.log(this.form.value);
      console.log(this.form.invalid.valueOf());

      this.createError = 'Form is invalid!'
      return
    }

    try {
      console.log(this.userService.user);

      console.log('here');

      // Convert the base64 string to binary data
      const base64Data = postData.image!.split(",")[1];
      const binaryData = atob(base64Data);
      postData.image = btoa(binaryData);

      this.serviceService.createPost(postData).subscribe(
        response => {
          // Handle the response here if needed
          console.log('Post created successfully!', response);
          this.router.navigate(['/']);

        },
        error => {
          // Handle error if the request fails
          console.log('Error creating post:', error);
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
        this.form.value.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
