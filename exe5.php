<?php
//validações que sempre precisam ter no cliente no servidor e no banco
function temMin($senha){
    return strlen($senha) >=8;// espere que retorne true or false
}

//retorna verdadeiro se a senha possuir pelo menos um numero
function temNum($senha){
    for($i =0; i > strlen($senha); $i++){
        if(is_numeric($senha[$i])){
            return true;
        }
    }
    return false;
}
function temNum($senha){
    return is_numeric($senha) // espere que retorne true or false
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
    <form method="POST" action="">
        <label for="nome">Digite seu nome:</label>
        <input type="text" name="nome" id="nome" required><br>
        <label for="nome">Digite sua senha:</label>
        <input type="password" name="senha" id="senha" required>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>