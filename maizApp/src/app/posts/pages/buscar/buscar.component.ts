import { Component } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

    termino: string = '';
    posts: Post[] = [];

    postSeleccionado: Post[] | undefined;

    constructor( private postsService: PostsService) { }

    buscando(){
      this.postsService.getSugerencias( this.termino.trim() )
                          .subscribe( posts => this.posts = posts );
    }

    opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {
      if( !event.option.value){
        this.postSeleccionado = undefined;
        return;
      }

      const post: Post = event.option.value;
      this.termino = post.titulo;

      this.postsService.getPostPorId( post.id! )
                          .subscribe( post => this.postSeleccionado = post)
    }
}
