/**
 * DESAFIO: ARMAZENAMENTO DE DADOS NO CLIENTE (COOKIES)
 * Centro Universitário Senac
 * Professor: Dennis Lopes da Silva
 * 
 * Instruções: Complete as lacunas abaixo seguindo as orientações da Aula 10.pdf.
 */

function salvar() {
    const nome = document.getElementById('inputNome').value;
    const temaEscolhido = document.getElementById('selectTema').value;
    
    if (!nome) {
        alert("Por favor, digite seu nome.");
        return;
    }

    // 1. Defina uma data de expiração para daqui a 7 dias
    const data = new Date();
    data.setDate(data.getDate() + 7);
    const expiracao = "expires=" + data.toUTCString();

    /**
     * DESAFIO 01: CRIAÇÃO/ATUALIZAÇÃO[cite: 1]
     * Use a propriedade document.cookie para salvar:
     * - O cookie "usuario" com o valor da variável 'nome'
     * - O cookie "tema" com o valor da variável 'temaEscolhido'
     * Dica: Não esqueça de incluir a 'expiracao' e o 'path=/'[cite: 1].
     */
    
    // --- ESCREVA SEU CÓDIGO AQUI ---
    document.cookie="usuario" + nome + ";" + expiracao + ";path=/";//armazenando string com chave valor
    document.cookie="tema" + temaEscolhido + ";" + expiracao + ";path=/";


    // ------------------------------

    alert("Preferências salvas!");
    aplicarLogica();
}

function lerCookie(nomeChave) {
    /**
     * DESAFIO 02: LEITURA[cite: 1]
     * A propriedade document.cookie retorna todos os cookies em uma única string.
     * Você deve transformar essa string em um array e procurar pela 'nomeChave'.
     */
    
    // --- ESCREVA SEU CÓDIGO AQUI ---
    // Dica: Use document.cookie.split(';').
    const nomeProcurado= nomeChave + "=";
    const listaCookies= document.cookie.split(";");
    for(let i=0; i<listaCookies; i++){//passando pelos ites da lista
        let c= listaCookies[i].trim();//pega cada item e salva na c tirando os espaços antes e depois
        if (c.indexOf(nomeProcurado)==0){//se index do nomechave= 0
            return c.substring(nomeProcurado.length,c.length);//retorna string 

        }

    }
    // ------------------------------
    
    return ""; // Retorne o valor encontrado ou string vazia
}

function limpar() {
    /**
     * DESAFIO 03: EXCLUSÃO[cite: 1]
     * Para excluir um cookie, você deve configurar a data de expiração para o passado.
     * Dica: Use a data "Thu, 01 Jan 1970 00:00:00 UTC".
     */
    
    // --- ESCREVA SEU CÓDIGO AQUI ---
    document.cookie=""

    // ------------------------------
    
    alert("Configurações limpas!");
    location.reload(); 
}

/**
 * LÓGICA DE INTERFACE
 * Esta função lê os cookies e atualiza o visual da página.
 * Ela já está pronta para uso!
 */
function aplicarLogica() {
    const user = lerCookie("usuario");
    const theme = lerCookie("tema");

    // Atualiza a mensagem de boas-vindas
    if (user) {
        document.getElementById('msg').innerText = "Olá, " + user + "!";
        document.getElementById('inputNome').value = user;
    }

    // Aplica o tema visual conforme o cookie[cite: 1]
    if (theme === "escuro") {
        document.body.classList.add('dark-mode');
        document.getElementById('selectTema').value = "escuro";
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('selectTema').value = "claro";
    }
}

// Executa automaticamente ao carregar a página
window.onload = aplicarLogica;