import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import { ApiService } from './api.service';
const CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private sessionUser : User;
  loggedInUser = new BehaviorSubject<User>(new User());

  constructor(private apiService: ApiService) {

  }

  
  public getCurrentRole() : string {
    return this.getSessionUser?.role;
  }

  public isUserLoggedIn() : boolean {
    if (this.getSessionUser && this.getSessionUser?.loginUserId) {
      return true;
    }
    return false;
  }
  
  public get getSessionUser(): User {
    if (!this.sessionUser) {
      this.sessionUser = new User();
      try {
        const bytes = CryptoJS.AES.decrypt(
          window.sessionStorage.getItem('xttdsr&*'),
          window.name
        );
        this.sessionUser = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } catch (error) {
        console.error('user not logged in');
      }
    }
    return this.sessionUser;
  }


  public set setSessionUser(user: User) {
    window.name = user['encryKey'];
    window.sessionStorage.setItem(
      'xttdsr&*',
      CryptoJS.AES.encrypt(JSON.stringify(user), window.name)
    );
    this.sessionUser = user;
  }

  logout(): void {
    window.sessionStorage.clear();
    this.sessionUser = new User();
  }

  login(user: User) {
    return this.apiService.post("login", user);
  }
}
