import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  userId: string | null = null; // Initialize userId as null

  constructor(private userService: UserService, private router: Router) {
    // Retrieve userId from local storage during component initialization
    let id = localStorage['user']
    if (id) {
      let parsedId = JSON.parse(id);
      this.userId = parsedId.id
    }

  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
    window.location.reload()
  }
}
