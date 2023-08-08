// ... Other imports and component code ...

import { Component } from "@angular/core";
import { FormBuilder, NgForm } from "@angular/forms";
import { ServiceService } from "../service.service";
import { UserService } from "../user/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  postData = {
    title: '',
    image: '',
    tags: '',
    description: '',
    ownerId: this.userService.user?.id,
    ownerEmail: this.userService.user?.email
  };

  constructor(private fb: FormBuilder, private serviceService: ServiceService, private userService: UserService) {
  }

  async create(form: NgForm): Promise<void> {
    if (form.invalid) {
      throw Error('form is invalid');
    }

    try {
      console.log(this.userService.user);

      console.log('here');

      // Convert the base64 string to binary data
      const base64Data = this.postData.image.split(",")[1];
      const binaryData = atob(base64Data);
      this.postData.image = btoa(binaryData);

      this.serviceService.createPost(this.postData).subscribe(
        response => {
          // Handle the response here if needed
          console.log('Post created successfully!', response);
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
        this.postData.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
