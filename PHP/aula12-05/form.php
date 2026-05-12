<?php
    session_start();
    $erro = $_SESSION["erro"] ?? 0;
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="valida.php" method="post">
        <div>
            <label>Usuário: </label>
            <input type="text" name="usuario">
        </div>
        <div>
            <label>Senha: </label>
            <input type="password" name="senha">
        </div>
        <div>
            <input type="submit">
        </div>
        <div>
            <?php
                if($erro == "1"){
                    echo "Usuário e/ou senha incorretos!";
                }
                else{
                    if($erro == "2"){
                    echo "Efetue login!";
                }
                }
            ?>
        </div>
    </form>

</body>
</html>