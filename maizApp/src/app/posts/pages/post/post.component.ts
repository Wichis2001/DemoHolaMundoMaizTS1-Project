import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class PostComponent implements OnInit {

  posts!: Post[];

  constructor( private activatedRoute: ActivatedRoute,
               private postService: PostsService,
               private router: Router ){}

  ngOnInit(): void {
    this.activatedRoute.params
                    .pipe(
                      switchMap( ({ id }) => this.postService.getPostPorId( id ))
                    )
                    .subscribe( posts => this.posts = posts );
  }

  regresar() {
    this.router.navigate(['/posts/listado'])
  }
}
