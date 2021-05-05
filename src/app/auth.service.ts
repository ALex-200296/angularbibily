import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get token () {
    if(localStorage.getItem('auth_token')) {
      return localStorage.getItem('auth_token')
    }
    return null
   }

  isAuthorization() {
    return !!this.token;
  }

  setToken(token: string, position: string) {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('position', position);
  }

  deleteToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('position');
  }

  position() {
    return localStorage.getItem('position');
  }

}
