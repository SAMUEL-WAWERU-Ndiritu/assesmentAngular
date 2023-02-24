import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      localStorage.setItem('isLoggedin', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedin');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('isLoggedin') === 'true';
  }
}
