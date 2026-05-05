// 1. Apenas Letras e EspaÃ§os (Ex: "Rio de Janeiro")
const REGEX_CIDADE = /^[a-zA-Z\s]+$/; 

// 2. Formato de Data DD/MM/AAAA (Ex: "25/12/2025")
const REGEX_DATA = /^\d{2}\/\d{2}\/\d{4}$/;

// 3. Valor Flutuante (Decimal com . ou ,) (Ex: "100.50" ou "100,50")
const REGEX_VALOR = /^\d+([,\.]\d+)?$/;

// 4. Nome de UsuÃ¡rio (AlfanumÃ©rico + _, 3 a 16 caracteres) (Ex: "user_dev_123")
const REGEX_USERNAME = /^[a-zA-Z0-9_(3,16)]$/;

// 5. Senha Forte (MÃ­n. 8 caracteres, 1 maiÃºscula, 1 minÃºscula, 1 nÃºmero)
const REGEX_SENHA = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,};$/;//look ahead: verifica do começo ao fim

// =====================================================================
// LÃ“GICA DO FORMULÃRIO (PRONTA PARA TESTAR OS REGEX)
// =====================================================================

const form = document.getElementById('desafioForm');
const statusEnvio = document.getElementById('status-envio');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let formValido = true;

    // Limpa estados anteriores
    document.querySelectorAll('.mensagem-erro').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.classList.remove('erro'));
    statusEnvio.textContent = '';
    statusEnvio.classList.remove('status-sucesso', 'status-falha');

    // Mapeamento dos campos e suas regras
    const campos = [
        { id: 'cidade', regex: REGEX_CIDADE, erroMsg: 'Use apenas letras e espaÃ§os.' },
        { id: 'data', regex: REGEX_DATA, erroMsg: 'Use o formato DD/MM/AAAA.' },
        { id: 'valor', regex: REGEX_VALOR, erroMsg: 'Use o formato decimal (ex: 100.50 ou 100,50).' },
        { id: 'username', regex: REGEX_USERNAME, erroMsg: 'Deve ter 3-16 caracteres, apenas letras, nÃºmeros ou _.' },
        { id: 'senha', regex: REGEX_SENHA, erroMsg: 'MÃ­n. 8 caracteres, 1 maiÃºscula, 1 minÃºscula e 1 nÃºmero.' },
    ];

    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        const valor = input.value.trim();
        
        // Verifica se a REGEX falhou OU se o campo estÃ¡ vazio
        if (valor === '' || !campo.regex.test(valor)) {
            const erroElement = document.getElementById(`erro-${campo.id}`);
            
            // Define a mensagem de erro
            if (valor === '') {
                erroElement.textContent = 'Campo obrigatÃ³rio.';
            } else {
                erroElement.textContent = campo.erroMsg;
            }
            
            input.classList.add('erro');
            formValido = false;
        }
    });

    if (formValido) {
        // SimulaÃ§Ã£o de envio com sucesso (Fetch API)
        statusEnvio.textContent = 'Sucesso! Todos os campos estÃ£o no formato correto.';
        statusEnvio.classList.add('status-sucesso');
    } else {
        statusEnvio.textContent = 'Falha na validaÃ§Ã£o. Corrija os campos em vermelho.';
        statusEnvio.classList.add('status-falha');
    }
});