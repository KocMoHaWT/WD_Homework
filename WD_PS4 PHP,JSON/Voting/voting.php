<?php

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $yourVote = $_POST['tea'];
    if(0 < $yourVote && $yourVote < 10) {
        saveVote($yourVote);
    } else {
        echo 'wrong val';
    }
}

    function saveVote($vote) {
        $json = file_get_contents('vote.json');
        $array = json_decode($json,true);
        $array[$vote - 1]['number']++;
        $json = json_encode($array,JSON_PRETTY_PRINT);
        file_put_contents('vote.json', $json);

        header('Location: pieChart.html');
    }

