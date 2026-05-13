// =====================================================================
// DEFINIÇÃO DAS CHAVES DE ARMAZENAMENTO
// =====================================================================
const CHAVE_PREFERENCIAS = 'desafioPrefs';
const CHAVE_RASCUNHO = 'desafioRascunho';

// =====================================================================
// PARTE 1: localStorage - Preferências Permanentes (JSON.stringify/parse)
// =====================================================================

const nomeUserInput = document.getElementById('nomeUser');
const pontuacaoInput = document.getElementById('pontuacao');
const prefStatus = document.getElementById('prefStatus');
const btnSalvarPref = document.getElementById('btnSalvarPref');

// 1. CARREGAR PREFERÊNCIAS (localStorage)
function carregarPreferencias() {
    // [DESAFIO 1]: Recupere a string JSON da CHAVE_PREFERENCIAS do localStorage
    const prefsString = localStorage.getItem(CHAVE_PREFERENCIAS); 

    if (prefsString) {
        // [DESAFIO 2]: Converta a string JSON (prefsString) de volta para um objeto JavaScript
        const prefs = JSON.parse(prefsString); 

        // Atribui os valores recuperados aos campos do formulário (Este bloco está completo)
        nomeUserInput.value = prefs.nome || '';
        pontuacaoInput.value = prefs.pontuacao || 0;
        prefStatus.textContent = `Carregado: ${prefs.nome} com ${prefs.pontuacao} pts.`;
    } else {
        prefStatus.textContent = 'Nenhuma preferência salva permanentemente.';
    }
}

// 2. SALVAR PREFERÊNCIAS (localStorage)
btnSalvarPref.addEventListener('click', () => {
    const nome = nomeUserInput.value;
    const pontuacao = parseInt(pontuacaoInput.value);

    // Cria um objeto JavaScript com os dados (Este bloco está completo)
    const prefsObjeto = {
        nome: nome,
        pontuacao: isNaN(pontuacao) ? 0 : pontuacao
    };

    // [DESAFIO 3]: Converta o objeto JavaScript (prefsObjeto) em uma string JSON
    const prefsString = JSON.stringify(prefsObjeto); 

    // [DESAFIO 4]: Salve a string JSON (prefsString) no localStorage usando a CHAVE_PREFERENCIAS
    JSON.stringify(prefsObjeto);

    alert('Preferências salvas! Recarregue a página (F5) para testar a persistência.');
    carregarPreferencias(); // Atualiza o status
});


// =====================================================================
// PARTE 2: sessionStorage - Rascunho Temporário
// =====================================================================

const rascunhoTextarea = document.getElementById('rascunho');
const rascunhoStatus = document.getElementById('rascunhoStatus');
const btnLimparRascunho = document.getElementById('btnLimparRascunho');


// 3. CARREGAR RASCUNHO (sessionStorage)
function carregarRascunho() {
    // [DESAFIO 5]: Recupere o valor da CHAVE_RASCUNHO do sessionStorage
    const rascunho = sessionStorage.getItem(CHAVE_RASCUNHO);

    if (rascunho) {
        rascunhoTextarea.value = rascunho;
        rascunhoStatus.textContent = `Rascunho carregado (${rascunho.length} caracteres).`;
    } else {
        rascunhoStatus.textContent = 'Nenhum rascunho temporário encontrado.';
    }
}

// 4. SALVAR RASCUNHO AUTOMATICAMENTE (sessionStorage)
rascunhoTextarea.addEventListener('input', () => {
    const texto = rascunhoTextarea.value;
    
    // [DESAFIO 6]: Salve o texto atual (texto) no sessionStorage usando a CHAVE_RASCUNHO
    sessionStorage.setItem(CHAVE_RASCUNHO, texto);

    rascunhoStatus.textContent = `Rascunho salvo em sessão (${texto.length} caracteres).`;
});

// 5. LIMPAR RASCUNHO (sessionStorage)
btnLimparRascunho.addEventListener('click', () => {
    // [DESAFIO 7]: Remova a CHAVE_RASCUNHO do sessionStorage
    sessionStorage.removeItem(CHAVE_RASCUNHO);

    rascunhoTextarea.value = '';
    rascunhoStatus.textContent = 'Rascunho limpo da sessão.';
    alert('Rascunho limpo! Recarregue a página e verifique que ele SUMIU.');
});


// Inicializa as funções de carregamento ao carregar a página (Este bloco está completo)
document.addEventListener('DOMContentLoaded', () => {
    carregarPreferencias();
    carregarRascunho();
});