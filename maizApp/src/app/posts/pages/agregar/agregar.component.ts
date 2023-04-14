import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  post: Post = {
    titulo: '',
    ingredientes: '',
    contenido: '',
    alt_img: ''
  }

  posts!: Post [];

  ngOnInit(): void {

    if( this.router.url.includes('editar')){
      this.activatedRoute.params
                  .pipe( switchMap( ( { id } ) => this.postService.getPostPorId( id )) )
                  .subscribe( posts => {
                    this.post = posts[0]
                  } );
    }


  }
  constructor( private postService: PostsService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private dialog: MatDialog ) { }

  guardar(){
    if( this.post.titulo.trim().length === 0 || this.post.ingredientes.trim().length === 0 || this.post.contenido.trim().length === 0 || this.post.contenido.trim().length === 0 ) {
      return;
    }

    if( this.post.id ){
      this.postService.actualizarPost( this.post )
                          .subscribe( post => this.mostrarSnackBar('Registro Actualizado'))
    } else {
      this.postService.agregarPost( this.post )
                          .subscribe( post => {
                            this.router.navigate(['/posts/editar', post[0].id ]);
                            this.mostrarSnackBar('Registro creado');
                          });
    }
  }

  borrar() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: { ...this.post }
    })

    dialog.afterClosed().subscribe( result => {
      if( result ){
        this.postService.borrarPost( this.post.id! )
                            .subscribe( resp => {
                            this.router.navigate(['/posts']);
        })
      }
    })

  }

  mostrarSnackBar( mensaje: string ){
    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    })
  }
}
