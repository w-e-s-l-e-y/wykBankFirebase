// Referenciando os campos do formulário
const valorInput = document.getElementById('valor');
const errorMessage = document.getElementById('error-message');

// Função para realizar o depósito
function depositar() {
    const valor = parseFloat(valorInput.value);

    // Validar se o valor é positivo
    if (valor <= 0) {
        errorMessage.textContent = 'Por favor, insira um valor positivo.';
        return;
    }

    // Lógica para realizar o depósito usando o Firebase Realtime Database ou Firestore

    // Exibir mensagem de confirmação
    alert('Depósito realizado com sucesso!');
}

// Função para voltar para a página anterior
function voltar() {
    window.history.back();
}
