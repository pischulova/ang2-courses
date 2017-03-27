import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  public isAuthenticated: boolean = false;

  public login(name: string, pass: string) {
    localStorage.setItem('currentUser', JSON.stringify({
      username: name,
      password: pass,
      token: this.getToken()
    }));
    this.isAuthenticated = true;
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.isAuthenticated = false;
  }

  public getUserInfo(): string {
    if (this.isAuthenticated) {
      return JSON.parse(localStorage.getItem('currentUser')).username;
    }
  }

  private getToken() {
    return '' + (Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000);
  }
}
