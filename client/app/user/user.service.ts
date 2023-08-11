import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/types/postInterface';
import { User } from 'src/types/user';
import { BehaviorSubject, Observable, Subscription, mergeMap, tap } from 'rxjs';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  user$$: any;

  get isLogged(): boolean {
    return !!this.user;
  }



  constructor(private httpClient: HttpClient) {
    try {
      const lsUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
 
  isOwner(id: any): boolean {
    if (id === this.user?.id) {
      
      return true
    } else {
      
      

      return false
    }
  }
  async register(data: User) {
    console.log('now here');

    const body = { firstName: data.firstName, email: data.email, password: data.passGroup.password, repass: data.passGroup.repass, lastName: data.lastName };
    console.log(body);
    try {
      const response: any = await this.httpClient.post('http://localhost:3000/register', body).toPromise();
      console.log(response);

      if (Object.entries(response).length === 0) {
        console.log('No user');
        throw new Error('no user');
      }
      this.user = response
      localStorage.setItem(USER_KEY, JSON.stringify(this.user));

    } catch (error) {
      console.error('register failed:', error);
      throw error;
    }




  }

  async login(email: string, password: string) {
    const body = { email, password };

    try {
      const response: any = await this.httpClient.post('http://localhost:3000/login', body).toPromise();
      // Assuming the response from the API contains user data
      if (response.status === 404) {
        return;
      }
      if (Object.entries(response).length === 0) {
        console.log('No user');
        throw new Error('no user');
      }
      this.user = response;

      // Store the user data in local storage
      localStorage.setItem(USER_KEY, JSON.stringify(this.user));
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Rethrow the error to the caller
    }
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
  }
}
