<?php
session_start();
//setar tema padrão e verificar se existe o tema que a pessoa escolheu p/ aplicar
if(isset($_GET['tema'])){// pega o tema via url e define o tema padrão
    $_SESSION['temaPadrao'] = $_GET['tema'];

}
else{
    $_SESSION['temaPadrao'] ='claro';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .claro{
            background: white;
        }

        .escuro{
            background: black;
        }

    </style>
</head>
<body class = "<?php echo $_SESSION['temaPadrao'];?>">
    <form action="">
        <input type="submit" name="tema" value="claro">
        <input type="submit" name="tema" value="escuro">
    </form>
    <?php
    echo $_SESSION['temaPadrao'];
    ?>
</body>
</html>