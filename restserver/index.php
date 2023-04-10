<?php

    require_once "models/Post.php";

    switch ($_SERVER['REQUEST_METHOD']){
        case 'GET':
                $post = new Post();
                echo json_encode(Post::getAll());
                break;
        default:
            break;
    }
