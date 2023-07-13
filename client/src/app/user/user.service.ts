import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/types/postInterface';
import { User } from 'src/types/user';

const USER_KEY = '[user]';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor(private httpClient: HttpClient) {
    try {
      const lsUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined
    }



  }

  register(data: Post) {
    const body = { firstName: data.firstName, email: data.email, password: data.password, repass: data.repass, lastName: data.lastName }
    console.log(body);

    return this.httpClient.post(`http://localhost:3000/register`, body)
  }
  login(): void {
    this.user = {
      email: "John@abv.bg",
      password: 'Kitaeca',
      firstName: "daw",
      lastName: "wah"
    }
    localStorage.setItem(USER_KEY, JSON.stringify(this.user))
  }
  logout(): void {
    this.user = undefined
    localStorage.removeItem(USER_KEY)

  }
}
