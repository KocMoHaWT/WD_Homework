<?php
session_start();
if($_SERVER['REQUEST_METHOD'] === 'POST') {
switch (htmlentities($_POST['action'])) {
         case 'getSumm':
             getSumm();
             break;
         case 'getSpecialSumm':
             getSpecialSumm();
             break;
         case 'scanDir':
            scanDirectory();
            break;
         case 'chessBoard':
             buildBoard();
             break;
         case 'findSum';
            findSum();
            break;
         case 'arrayTask';
            workWithArray();
            break;
         case 'countInfo';
            countText();
            break;
     }
}


function getSumm() {
    $firstNum = $_POST['firstNum'];
    $secondNum = $_POST['secondNum'];
    $res = 0;
    if(!empty($firstNum) && !empty($secondNum)) {
        for ($i = $firstNum; $i <= $secondNum; $i++) {
            $res += $i;
        }
    }
    $_SESSION["task1"] = $res;
    header('Location: index.php');
}

function getSpecialSumm() {
    $firstNum = $_POST['firstNum2'];
    $secondNum = $_POST['secondNum2'];
    $res = 0;
    if(!empty($firstNum) && !empty($secondNum)) {
        for ($i = $firstNum; $i < $secondNum; $i++) {
            $num = abs($i) % 10;
            if ($num === 2 || $num === 3 || $num === 7) {
                $res += $i;
            }
        }
    }
    $_SESSION['task2'] = $res;
    header('Location: index.php');
}

function scanDirectory() {
    $uploaddir = 'data/';
    if(isset($_FILES['file']['name']) ) {
        if(move_uploaded_file($_FILES['file']['tmp_name'],$uploaddir.$_FILES['file']['name'])) {
            readData();
        } else {
            echo 'please try again. Tomorrow would be nice =)';
        }
    }

    header('Location: index.php');
}


function readData() {
    $uploadDir = 'data/';
    $data = array_slice(scandir($uploadDir), 2);
    $_SESSION['dirData'] = array_map('checkExt',$data);
}

function  checkExt ($file) {
    $path = 'data/';
    $size = 100;
    $documentInfo = pathinfo($file);
    $ext = $documentInfo['extension'];
    if ($ext === 'jpg' || $ext === 'png' || $ext === 'jpeg') {
        $item = '<img src="' .$path. $documentInfo['basename'].'" alt="' . $documentInfo['filename'] . '" width="'.$size.'" height="'.$size.'">';
    } else {
        $item = $documentInfo['basename'];
    }
    $fileSize = filesize($path.$file);

   return '<a href="' . $path . $documentInfo['basename']. '" download>'.$item.'</a>'.getFileSize($fileSize);
}

function getFileSize($bytes) {
    if ($bytes >= 1073741824) {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        } elseif ($bytes >= 1048576) {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        } elseif ($bytes >= 1024) {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        } elseif ($bytes > 1) {
            $bytes = $bytes . ' bytes';
        } elseif ($bytes == 1){
            $bytes = $bytes . ' byte';
        } else {
            $bytes = '0 bytes';
        }
        return $bytes;
    }

    function buildBoard() {
        $boardSize = $_POST['boardSize'];
        list($x,$y) = preg_split('/x/',$boardSize,2);
        $color = 0;
        $counter = 0;
        $blockSize = 50;
        $_SESSION['boardParts'][$counter++] = '<div  class="borderBlock" style="width:' . ($y * $blockSize) .'px'. '; height:' . ($x * $blockSize) . 'px'.'">';
        for($i = 0; $i < $x; $i++) {
            for($j = 0; $j < $y; $j++) {
                if($color % 2 === 0) {
                    $div = '<div class="white-block"></div>';
                } else {
                    $div = '<div class="black-block"></div>';
                }
                $color++;
                $_SESSION['boardParts'][$counter++] = $div;
            }
            $_SESSION['boardParts'][$counter++] = '<br>';
            if($y % 2 === 0) {
                $color++;
            }
        }
        $_SESSION['boardParts'][] = '</div>';
        header('Location: index.php');
    }

    function findSum() {
        $number = $_POST['number'];
        $numbers = preg_split('//',$number);
        $sum = 0;
        for($i = 0; $i < count($numbers);$i++) {
            $sum += intval($numbers[$i]);
        }
        $_SESSION['sum'] = $sum;
        header('Location: index.php');
    }

    function workWithArray() {
        $array = [];
        for($i = 0; $i < 100; $i++) {
            $array[] = rand(1,10);
        }
        $array = array_unique($array);

        $uniqueArray = array_diff($array, array(NULL));
        sort($uniqueArray);
        $uniqueArray = array_reverse($uniqueArray);
        $uniqueArray = array_map('double',$uniqueArray);
        $_SESSION['processedArray'] = $uniqueArray;
        header('Location: index.php');
    }

    function double($number) {
        return $number * 2;
    }

    function countText() {
        $text = $_POST['someText'];
        $_SESSION['countedElements'] = [];
        $_SESSION['countedElements'][] = count(explode("/\n/",$text));
        $_SESSION['countedElements'][] =  substr_count($text, ' ');
        $_SESSION['countedElements'][] = iconv_strlen($text) - $_SESSION['countedElements'][1];
        header('Location: index.php');
    }
?>

