<?php
session_start();

//
if (isset($_GET['set_tema'])) {
    $temaEscolhido = $_GET['set_tema'];
    
    // 
    if ($temaEscolhido === 'escuro' || $temaEscolhido === 'claro') {
        $_SESSION['tema'] = $temaEscolhido;
    }
    
    // 
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// 
$temaAtual = isset($_SESSION['tema']) ? $_SESSION['tema'] : 'claro';
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Temas com $_SESSION</title>
    
    <style>
        body {
            font-family: sans-serif;
            transition: background 0.4s, color 0.4s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        <?php if ($temaAtual === 'escuro'): ?>
            body {
                background-color: #1a1a1a;
                color: #ffffff;
            }
            .card { background-color: #2d2d2d; border: 1px solid #444; }
        <?php else: ?>
            body {
                background-color: #f4f4f9;
                color: #333333;
            }
            .card { background-color: #ffffff; border: 1px solid #ddd; }
        <?php endif; ?>

        .card {
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-align: center;
        }

        .botoes { margin-top: 20px; }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            color: white;
        }

        .btn-claro { background-color: #f39c12; }
        .btn-escuro { background-color: #34495e; }
    </style>
</head>
<body>

    <div class="card">
        <h1>Tema Atual: <?php echo ucfirst($temaAtual); ?></h1>
        <p>Esta preferência está salva na sua <strong>Sessão PHP</strong>.</p>

        <div class="botoes">
            <a href="?set_tema=claro" class="btn btn-claro">☀️ Tema Claro</a>
            <a href="?set_tema=escuro" class="btn btn-escuro">🌙 Tema Escuro</a>
        </div>
    </div>

</body>
</html>