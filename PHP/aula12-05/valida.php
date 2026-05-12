<?php
    session_start();

    $usuario = trim($_POST["usuario"]);
    $senha = trim($_POST["senha"]);

    echo htmlspecialchars($usuario, ENT_QUOTES, "UTF-8");
    die();

    

    if(($usuario === "admin") && ($senha === "123")){
        $_SESSION["logado"] = true;
        $_SESSION["nome"] = "João";
        $_SESSION["erro"] = 0;
        header("Location:perfil.php");
    }
    else{
        $_SESSION["logado"] = false;
        $_SESSION["erro"] = "1";
        header("Location:form.php");
    }


?>