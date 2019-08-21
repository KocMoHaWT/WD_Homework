<?php
session_start();


 $message = isset($_POST['message']) ? $_POST['message'] : false;
 $name = isset($_SESSION['name']) ? $_SESSION['name'] : false;

 if($name !== '' && $message !== '') {
    $messages = file_get_contents('../data/messages.json');
    $messages = json_decode($messages,true);
    date_default_timezone_set('Europe/Athens');
    $obj = [
        'date' => date('Y-m-d'),
        'currentDate' => date('H:i:s'),
        'name'=> $name,
        'message' => $message
    ];
    $messages[] = $obj;
    file_put_contents('../data/messages.json',json_encode($messages,JSON_PRETTY_PRINT));
 }

