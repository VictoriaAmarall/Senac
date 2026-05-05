<?php
    function maior_num(int $a, int $b, int $c): int{
        if($a >= $b && $a >= $c){
            return $a;
        }elseif($b >= $a && $b >= $c){
            return $b;
        }else{
            return $c;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo maior_num(20,10,30);
    ?>
</body>
</html>