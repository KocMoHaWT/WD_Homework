<?php
    session_start();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Pacifico&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>AJAX</title>
</head>
<body>
<div class="blocks">
    <div class="block black"></div>
    <div class="block green"></div>
    <div class="block orange"></div>
    <div class="block yellow"></div>
    <div class="block blue"></div>
    <div class="block black"></div>
    <div class="block green"></div>
    <div class="block orange"></div>
    <div class="block yellow"></div>
    <div class="block blue"></div>
</div>
<div class="main">

    <span class="h1">Easy Chat</span>
    <form class="form" id="form">
        <label for="name">Enter your e-mail</label>
        <input type="text" class="inputStyle padding-l" name="name" id="name" value="Jhon Doe">
        <label for="password">Enter your password</label>
        <input type="password" class="inputStyle padding-l" name="password" id="password" value="******">
        <div class="button-container">
            <input type="submit" class="specialButton" name="submit" id="enter" value="Submit">
            <div class="shadow"></div>
        </div>
        
    </form>
    <div class="chat" id="chat">
        <input type="text" name="kastul" id="name--session" value="<?php isset($_SESSION['name'])?>" hidden>
        <div class="chat__window" id="chat__window"></div>
        <div class="chat__act">
            <textarea  class="messageArea" name="message" id="message"></textarea>
            <input type="submit" value="Send" class="btn-send" id="sendMessage">
        </div>
    </div>
</div>


<script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script src="scripts/script.js"></script>

<script src="scripts/sendingMassage.js"></script>
</body>
</html>