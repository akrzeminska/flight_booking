import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotsHttpServiceService {

  readonly apiUrl : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getAllPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  } 

}
