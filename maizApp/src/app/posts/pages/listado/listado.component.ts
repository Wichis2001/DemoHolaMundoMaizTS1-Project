import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card-content {
      margin-bottom: 1em;
    }
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .container {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 20px;
      user-select: none;
      transition: 100ms;
    }

    .checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 2em;
  width: 2em;
  transition: 100ms;

}

    .container input:checked ~ .checkmark path {
      fill: #FF5353;
      stroke-width: 0;
    }

    .container input:checked ~ .checkmark {
      
    }

    .container:hover {
      transform: scale(1.1);
    }

    @keyframes like_effect {
      0% {
        transform: scale(0);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }

    @keyframes dislike_effect {
      0% {
        transform: scale(0);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }
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
