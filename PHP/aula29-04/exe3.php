<?php
    function somar(int $a, int $b): int{
        $soma = $a + $b;
        return $soma;
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
    <p>Resultado <?=somar(35,6);?></p>
    
</body>
</html>