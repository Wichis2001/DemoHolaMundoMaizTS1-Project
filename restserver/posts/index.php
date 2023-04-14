<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    require_once "./../controllers/PostController.php";


    switch ($_SERVER['REQUEST_METHOD']){
        case 'GET':
            $postController = new PostController();

            if( isset($_GET['id']) ){
                $postController->getWhere( $_GET['id']);
                return;
                } else if (isset($_GET['q'])){
                $postController->getQuery( $_GET['q']);
            }  else{
                $postController->getAllPosts();
                return;
            }

        break;
        default:
        break;
    }
