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
  isDarkTheme: boolean = false; // Initialize theme state
  showOptions: boolean = false; // Add showOptions property
  showThemeSubMenu: boolean = false; // Add showThemeSubMenu property

  constructor(private userService: UserService, private router: Router) {
    // Retrieve userId from local storage during component initialization
    let id = localStorage.getItem('user');
    if (id) {
      let parsedId = JSON.parse(id);
      this.userId = parsedId.id;
    }
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  toggleTheme(theme: string): void {
    this.isDarkTheme = theme === 'dark'; // Toggle theme based on the passed argument
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleThemeSubMenu(): void {
    this.showThemeSubMenu = !this.showThemeSubMenu;
  }

  ngOnInit(): void {
    // Check for theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
  }
}
