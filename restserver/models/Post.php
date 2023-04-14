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
                    'ingredientes' => ($row['ingredientes']),
                    'contenido' => ($row['contenido']),
                    'alt_img' => $row['alt_img'],
                ];
            }
            return $datos;
         }
         return $datos;
     }

        public static function getWhere($id_post){
            $db = new Connection();
            $query = "SELECT * FROM post WHERE id=$id_post";
            $resultado = $db->query($query);
            $datos = [];
            if( $resultado->num_rows ) {
                while($row = $resultado-> fetch_assoc() ){
                    $datos[] = [
                        'id' => $row['id'],
                        'titulo' => ($row['titulo']),
                        'ingredientes' => ($row['ingredientes']),
                        'contenido' => ($row['contenido']),
                        'alt_img' => $row['alt_img'],
                    ];
                }
                return $datos;
            }
            return $datos;
        }

        public static function getQuery($nombre){
            $db = new Connection();
            $query = "SELECT * FROM post WHERE titulo LIKE '%$nombre%' LIMIT 6;";
            $resultado = $db->query($query);
            $datos = [];
            if( $resultado->num_rows ) {
                while($row = $resultado-> fetch_assoc() ){
                    $datos[] = [
                        'id' => $row['id'],
                        'titulo' => ($row['titulo']),
                        'ingredientes' => ($row['ingredientes']),
                        'contenido' => ($row['contenido']),
                        'alt_img' => $row['alt_img'],
                    ];
                }
                return $datos;
            }
            return $datos;
        }

        public static function  addPost($titulo, $ingredientes, $contenido, $altImg) {
            $db = new Connection();
            $query = "INSERT INTO post ( titulo, ingredientes, contenido, username, alt_img)
                       VALUES('".$titulo."', '".$ingredientes."', '".$contenido."', 'admin', '".$altImg."')";
            $db->query($query);
            if( $db -> affected_rows ){
                $query = "SELECT * FROM post ORDER BY id DESC LIMIT 1;";
                $resultado = $db->query($query);
                $datos = [];
                if( $resultado->num_rows ) {
                    while($row = $resultado-> fetch_assoc() ){
                        $datos[] = [
                            'id' => $row['id'],
                            'titulo' => ($row['titulo']),
                            'ingredientes' => ($row['ingredientes']),
                            'contenido' => ($row['contenido']),
                            'alt_img' => $row['alt_img'],
                        ];
                    }
                    return $datos;
                }
                return $datos;
            }
            return null;
        }

        public static function  updatePost($titulo, $ingredientes, $contenido, $altImg, $id) {
            $db = new Connection();
            $query = "UPDATE post SET titulo = '".$titulo."', ingredientes= '".$ingredientes."', contenido = '".$contenido."', alt_img = '".$altImg."' WHERE id= $id;";
            $db->query($query);
            if( $db -> affected_rows ){
                $query = "SELECT * FROM post WHERE id = $id";
                $resultado = $db->query($query);
                $datos = [];
                if( $resultado->num_rows ) {
                    while($row = $resultado-> fetch_assoc() ){
                        $datos[] = [
                            'id' => $row['id'],
                            'titulo' => ($row['titulo']),
                            'ingredientes' => ($row['ingredientes']),
                            'contenido' => ($row['contenido']),
                            'alt_img' => $row['alt_img'],
                        ];
                    }
                    return $datos;
                }
                return $datos;
            }
            return null;
        }

        public static function delete($idPost){
            $db = new Connection();
            $query = "DELETE FROM post WHERE id = $idPost";
            $db->query($query);
            if( $db -> affected_rows >= 0){
                return TRUE;
            }
            return FALSE;
        }
    }