import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/posts.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( post: Post ): string {
    if( !post.id  && !post.alt_img && post.alt_img?.trim().length === 0 ){
      return 'assets/no-image.jpg'
    } else if( post.alt_img ) {
      return post.alt_img
    }

    return `assets/post/${ post.id }.jpg`
  }

}
