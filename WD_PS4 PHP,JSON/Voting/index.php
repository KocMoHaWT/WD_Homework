<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>voting</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
<div>
    <form class="spoonVote" action="voting.php" method="post" >
        <h3>Вы пьёте чай с ложкой в чашке?</h3>
        <label>
            <input type="checkbox" class="radio" value="1" name="tea" />Да, пью с ложкой в чашке</label>
        <label>
            <input type="checkbox" class="radio" value="2" name="tea" />Да, поэтому пью в очках</label>
        <label>
            <input type="checkbox" class="radio" value="3" name="tea" />Да, поэтому пью в очках - солнцезащитных</label>
        <label>
            <input type="checkbox" class="radio" value="4" name="tea" />Да, специально согнул ложку, что бы не вынимать</label>
        <label>
            <input type="checkbox" class="radio" value="5" name="tea" />Нет, я же интилигент(-ка)</label>
        <label>
            <input type="checkbox" class="radio" value="6" name="tea" />Нет, вообще  не беру ложку</label>
        <label>
            <input type="checkbox" class="radio" value="7" name="tea" />Что такое ложка?</label>
        <label>
            <input type="checkbox" class="radio" value="8" name="tea" />Кладу на стол</label>
        <label>
            <input type="checkbox" class="radio" value="9" name="tea" />Ложу на стол</label>
        <input type="submit" style="width: 100px">
    </form>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"> </script>
<script src="scripts/checkBoxScript.js"></script>
</body>
</html>