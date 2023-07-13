import { Component, NgModule } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  repass: string;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  agreeTerms: boolean;
  receiveNewsletter: boolean;

  constructor(private apiService: UserService) {
    this.email = '';
    this.password = '';
    this.repass = '';
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.country = '';
    this.agreeTerms = false;
    this.receiveNewsletter = false;
  }

  onSubmit(event: Event) {
    event.preventDefault()
    // Access the form input values here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Re-type Password:', this.repass);
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Gender:', this.gender);
    console.log('Country:', this.country);
    console.log('Agree Terms:', this.agreeTerms);
    console.log('Receive Newsletter:', this.receiveNewsletter);

    const body = {
      email: this.email,
      password: this.password,
      repass: this.repass,
      firstName: this.firstName,
      lastName: this.lastName
      // Include other form fields as needed
    };


    this.apiService.register(body).subscribe(
      response => {
        console.log(response);

      },
      error => {
        // Handle any errors that occur during the API call
      }
    );
  }
}
