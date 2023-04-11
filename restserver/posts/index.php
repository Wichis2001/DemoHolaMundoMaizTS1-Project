<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    require_once "./../controllers/PostController.php";


    switch ($_SERVER['REQUEST_METHOD']){
        case 'GET':
            $postController = new PostController();
            $postController->getAllPosts();
        break;
        default:
        break;
    }
