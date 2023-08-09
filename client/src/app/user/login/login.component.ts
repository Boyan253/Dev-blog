import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  loginError: string | null = null; // Declare loginError property

  constructor(private userService: UserService, private router: Router) { }

  async login(form: NgForm): Promise<void> {
    this.loginError = null; // Reset any previous login errors
    if (form.invalid) {
      this.loginError = 'Form is not filled'
      return
    }

    const { email, password } = form.value;
    try {
      await this.userService.login(email, password);

      this.router.navigate(['/']);
      setTimeout(() => {

        window.location.reload()
      }, 1000);
    } catch (error) {
      // Handle the login error here (e.g., show an error message)
      this.loginError = 'Login failed. Please check your credentials.'; // Set the error message
      // console.error('Login failed:', error);
      setTimeout(() => {
        this.loginError = null; // Remove the error message after a timeout
      }, 5000);
    }
  }
}
