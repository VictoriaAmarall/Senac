<?php
    session_start();

    $_SESSION["logado"] = false;
    $_SESSION["nome"] = "";
    $_SESSION["erro"] = 0;

    session_destroy();
    
    header("Location:form.php");

?>