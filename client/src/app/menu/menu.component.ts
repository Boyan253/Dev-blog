import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private userService: UserService, private router: Router) {

  }
  get isLoggedIn(): boolean {
    console.log(this.userService.isLogged);
    
    return false
    
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/'])
  }
}
