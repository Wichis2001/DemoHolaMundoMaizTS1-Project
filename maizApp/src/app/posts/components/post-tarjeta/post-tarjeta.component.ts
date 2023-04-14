import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-post-tarjeta',
  templateUrl: './post-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `]
})
export class PostTarjetaComponent {

  @Input() post!: Post;
}
