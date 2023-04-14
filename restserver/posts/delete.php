<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin,  Content-Type, Accept, Access-Control-Request-Method");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    require_once "./../controllers/PostController.php";

    $postController = new PostController();
    if(isset($_GET['id'])){
        $postController->deletePost( $_GET['id']);
    }