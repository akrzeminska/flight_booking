import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersData } from 'src/app/models/User';
import { Observable, filter, first, map } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl;
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient,
    @Inject(APP_BASE_HREF) private _baseHref: string
    ) {
      debugger
      this.usersUrl = this._baseHref + 'assets/data/users.json'
     }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }  
  
  checkCredentials(username: string, password: string) : Observable<boolean> {
    return this.http.get<UsersData>(this.usersUrl).pipe(
      map((usersData) => 
        {
          this.isLoggedIn = usersData.users.some((user) => user.username === username && user.password === password);
          return this.isLoggedIn;
        }
      )
    );
  }
}


