<?php
session_start();
if(isset($_SESSION['flag'])) {
   echo chatRefresh();
} else {
    auth();
}

function auth() {
    $name = isset($_POST['name']) ? $_POST['name'] : false;
    $password = isset($_POST['password']) ? $_POST['password'] : false;

    if ($name && $password) {
        check($name, $password);
        $_SESSION['name'] = $name;
        $_SESSION['flag'] = 1;
    }

}

function check($name, $password) {
    $json = file_get_contents('../data/users.json');
    $json = json_decode($json, true);
    if (count($json) > 0) {
        foreach ($json as $obj) {
            if ($obj['name'] === $name) {
                echo chatRefresh();
            } else {
                addToJson($name, $password);
            }
        }
    } else {
        addToJson($name, $password);
    }
}

function addToJson($name, $password) {
    $json = file_get_contents('../data/users.json');
    $array = json_decode( $json, true);
    $obj = [
        'name' =>  $name,
        'password' => $password
    ];
    $array[] = $obj;
    $json = json_encode($array, JSON_PRETTY_PRINT);
    file_put_contents('../data/users.json', $json);
    echo chatRefresh();
}

function chatRefresh() {
    $json = file_get_contents('../data/messages.json');
    $array = json_decode( $json, true);
    $lastDate = date('Y-m-d');
    $lastCurrentDate = date('H:i:s');
    $arr = [];
    foreach ($array as $obj) {
        if($lastDate <= $obj['date'] && $lastCurrentDate <= $obj['currentDate']) {
            $arr[] = $obj;
        }
    }
    return json_encode($arr);
}

