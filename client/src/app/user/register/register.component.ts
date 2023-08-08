import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email.validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';
import { UserService } from '../user.service';
import { Post } from 'src/types/postInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerError: string | null = null; // Declare loginError property

  form = this.fb.group({

    email: ["", [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    firstName: ["", [Validators.required,]],
    lastName: ["", [Validators.required,]],

    passGroup: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required, Validators.minLength(5)]], // This should be named 'rePassword' in the template
      },
      {
        validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });


  constructor(private fb: FormBuilder, private userService: UserService) { }

  async register(): Promise<void> {
    console.log('here');

    const postData = {
      id: '',
      email: this.form.value.email ?? '',
      firstName: this.form.value.firstName ?? '',
      lastName: this.form.value.lastName ?? '',
      passGroup: {
        password: this.form.value.passGroup?.password ?? '',
        repass: this.form.value.passGroup?.rePassword ?? '',
      },

    };

    if (this.form.invalid) {
      console.log(this.form.value);

      return;
    }
    try {
      await this.userService.register(postData)

    } catch (error) {
      this.registerError = 'Register failed. this Email is already taken.'; // Set the error message
      // console.error('Login failed:', error);
      setTimeout(() => {
        this.registerError = null; // Remove the error message after a timeout
      }, 5000);
    }

  }
}
