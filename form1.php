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
        <input type="text" name="nome" id="nome" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {//iss é feito para não aparecer o erro variavel inefinida quando a pessoa carrega pag e não envia nada para o forms
        $nomeDigitado = $_POST['nome'];

        function saudar($nome) {
            echo "<h2>Olá, " . htmlspecialchars($nome) . "!</h2>";
        }

        saudar($nomeDigitado);
    }
    ?>

</body>
</html>