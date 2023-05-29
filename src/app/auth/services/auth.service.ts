import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = './../../../assets/data/users.json';

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    return false
  }
}
