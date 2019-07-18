<?php
    session_start();
    if(isset($_SESSION['counters'])) { $_SESSION['counters']++; } else { $_SESSION['counters'] = 1;}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>warm up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="task__block">
    <form action="warmUp.php" method="post" class="task__block--form">
        <h1>Посчитать сумму чисел</h1>
        <input type="hidden" name="action" value="getSumm">
        <input type="number" name="firstNum" required>
        <input type="number" name="secondNum" required>
        <input type="submit" class="button" value="getSum">
        <div class="answer">
            <?=  isset($_SESSION['task1']) ? "Answer is: ". $_SESSION['task1']: "Answer is " ?>
        </div>

    </form>
</div>
<div class="task__block">
    <form action="warmUp.php" method="post" class="task__block--form">
        <h1>Посчитать сумму, суммируя только числа которые заканчиваются на 2,3, и 7</h1>
        <input type="hidden" name="action" value="getSpecialSumm">
        <input type="number" name="firstNum2" required>
        <input type="number" name="secondNum2" required>
        <input type="submit" class="button" value="get">
        <div class="answer">
            <?=  isset($_SESSION['task2']) ? "Answer is: ". $_SESSION['task2']: "Answer is " ?>
        </div>
    </form>
</div>

<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <h1>Загрузка файлов. Выьерите файл для загрузки.</h1>
        <input type="hidden" name="action" value="scanDir">
        <input type="file" name="file" required>
        <input type="submit" class="button" value="get">
        <div class="answer">
            <?php
                if(isset($_SESSION['dirData'])) {
                for ($i = 0; $i < count($_SESSION['dirData']); $i++) {
                    echo $_SESSION['dirData'][$i];
                }
            }
            ?>
        </div>
    </form>
</div>

<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <h1>Введите габариты шахматной доски.<br /> Ввиде '4х4'.</h1>
        <input type="hidden" name="action" value="chessBoard">
        <input type="text" name="boardSize" required>
        <input type="submit" class="button" value="get">

            <?php
                if(isset($_SESSION['boardParts'])) {
                    for ($i = 0; $i < count($_SESSION['boardParts']); $i++) {
                        echo $_SESSION['boardParts'][$i];
                    }
                }
            ?>

    </form>
</div>
<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <h1>Введите число, для подсчёта суммы его цыфр</h1>
        <input type="hidden" name="action" value="findSum">
        <input type="text" name="number" required>
        <input type="submit" class="button" value="get">
        <div class="answer">
            <?php
                if(isset($_SESSION['sum'])) {
                    echo $_SESSION['sum'];
                }
            ?>
        </div>
    </form>
</div>

<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <input type="hidden" name="action" value="arrayTask">
        <input type="submit" class="button" value="generateArray">
        <div class="answer">
            <?php

                if(isset($_SESSION['processedArray'])) {
                    for($i = 0; $i < count($_SESSION['processedArray']); $i++) {
                        echo $_SESSION['processedArray'][$i].' ';
                    }
                }
            ?>
        </div>
    </form>
</div>
<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <h1>Количество начатых сессий</h1>
        <input type="hidden" name="action" value="arrayTask">
        <div class="answer">
            <label><?php   echo $_SESSION['counters']; ?></label>
        </div>
    </form>
</div>
<div class="task__block">
    <form action="warmUp.php" enctype="multipart/form-data" method="post" class="task__block--form">
        <h1>Введитте текст для подсчёта его состовляющих</h1>
        <input type="hidden" name="action" value="countInfo">
        <textarea name="someText" placeholder="some text"  cols="30" rows="10"></textarea>
        <input type="submit" class="button" value="count">
        <div class="answer">
            <?php
                if(isset($_SESSION['countedElements'])) {
                        echo 'Количество строк: '.$_SESSION['countedElements'][0].' ';
                        echo 'Количество пробелов: '.$_SESSION['countedElements'][1].' ';
                        echo 'Количество символов: '.$_SESSION['countedElements'][2].' ';
                }
            ?>
        </div>
    </form>
</div>
</body>
</html>

<?php

//    session_destroy();
?>