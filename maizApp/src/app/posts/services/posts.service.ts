import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/posts.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Post[]>{

    return this.http.get<Post[]>('http://localhost/restserver/posts')
  }
}
