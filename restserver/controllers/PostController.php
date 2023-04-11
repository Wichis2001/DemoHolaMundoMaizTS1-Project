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
    }
