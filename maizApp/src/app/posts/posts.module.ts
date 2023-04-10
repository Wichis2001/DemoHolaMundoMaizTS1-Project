import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PostsRoutingModule } from './posts-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { PostComponent } from './pages/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    PostComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
