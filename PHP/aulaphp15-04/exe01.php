<?php
session_start();

 if(isset($_SESSION['visita']))
{
    $_SESSION['visita']++;
}
else{
    $_SESSION['visita'] = 1;
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
    <h2>Você visitou essa página<?php echo $_SESSION['visita']?> </h2>
</body>
</html>