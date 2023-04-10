<?php

    require_once "connection/Connection.php";
    class Post
    {
     public static function getAll(){
         $db = new Connection();
         $query = "SELECT * FROM entrada_blog";
         $resultado = $db->query($query);
         $datos = [];
         if( $resultado->num_rows ) {
            while($row = $resultado-> fetch_assoc() ){
                $datos[] = [
                    'titulo' => $row['titulo'],
                    'contenido' => $row['contenido'],
                    'imagen' => $row['imagen'],
                    'fecha_publicacion' => $row['fecha_publicacion']
                ];
            }
         }
         return $datos;
     }
    }