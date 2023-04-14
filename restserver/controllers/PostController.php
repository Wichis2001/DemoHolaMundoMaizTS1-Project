<?php
    require_once "./../models/Post.php";
    class PostController
    {
        public function getAllPosts() {
            $post = new Post();
            $data = $post::getAll();
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);

        }

        public function getWhere( $id_post ) {
            $post = new Post();
            $data = $post::getWhere( $id_post );
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);

        }

        public function getQuery( $nombre ) {
            $post = new Post();
            $data = $post::getQuery( $nombre );
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);

        }

        public function addPost( $titulo, $ingredientes, $contenido, $altImg  ) {
            $post = new Post();
            $data = $post::addPost( $titulo, $ingredientes, $contenido, $altImg );
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);

        }

        public function updatePost( $titulo, $ingredientes, $contenido, $altImg, $id  ) {
            $post = new Post();
            $data = $post::updatePost( $titulo, $ingredientes, $contenido, $altImg, $id );
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);
        }

        public function deletePost( $id  ) {
            $post = new Post();
            $data = $post::delete( $id );
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data);
        }
    }
