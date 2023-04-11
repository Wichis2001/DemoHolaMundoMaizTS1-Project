<?php
    require_once "./../connection/Connection.php";

    class Post
    {
     public static function getAll(){
         $db = new Connection();
         $query = "SELECT * FROM post";
         $resultado = $db->query($query);
         $datos = [];
         if( $resultado->num_rows ) {
            while($row = $resultado-> fetch_assoc() ){
                $datos[] = [
                    'id' => $row['id'],
                    'titulo' => ($row['titulo']),
                    'contenido' => ($row['contenido']),
                    'alt_img' => $row['alt_img'],
                    'cantidad_likes' => intval($row['cantidad_likes'])
                ];
            }
            return $datos;
         }
         return $datos;
     }
    }