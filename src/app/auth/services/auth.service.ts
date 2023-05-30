import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersData } from 'src/app/models/User';
import { Observable, filter, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = './../../../assets/data/users.json';
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    // console.log('zmienić to na return true');
    return this.isLoggedIn;
  }  
  
  checkCredentials(username: string, password: string) : Observable<boolean> {
    return this.http.get<UsersData>(this.usersUrl).pipe(
      map((usersData) => 
        {
          // console.log(usersData);
          this.isLoggedIn = usersData.users.some((user) => user.username === username && user.password === password);
          return this.isLoggedIn;
        }
      )
    );
  }
}


