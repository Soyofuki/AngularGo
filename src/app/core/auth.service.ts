import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    return token != null;
  }
}
