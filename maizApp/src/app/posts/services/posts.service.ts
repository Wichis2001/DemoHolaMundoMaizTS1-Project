import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/posts.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Post[]>{

    return this.http.get<Post[]>(`${ this.baseUrl }/restserver/posts`)
  }

  getPostPorId( id: string ):Observable<Post[]> {
    return this.http.get<Post[]>(`${ this.baseUrl }/restserver/posts?id=${ id }`);
  }

  getSugerencias( termino: string ): Observable<Post[]> {
    return this.http.get<Post[]>(`${ this.baseUrl }/restserver/posts?q=${ termino }`);
  }

  agregarPost( post: Post ): Observable<Post[]>{
    return this.http.post<Post[]>(`${ this.baseUrl }/restserver/posts/add.php`, JSON.stringify( post ) );
  }

  actualizarPost( post: Post ): Observable<Post[]>{
    return this.http.put<Post[]>(`${ this.baseUrl }/restserver/posts/put.php`, JSON.stringify( post ) );
  }

  borrarPost( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/restserver/posts/delete.php?id=${ id }` );
  }
}

