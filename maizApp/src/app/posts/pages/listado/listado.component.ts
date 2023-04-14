import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    
  `]
})
export class ListadoComponent implements OnInit {

  posts: Post [] = [];
  constructor( private postsService: PostsService ){}

  ngOnInit(): void {
      this.postsService.getPosts()
                      .subscribe( posts => this.posts = posts );
  }
}
