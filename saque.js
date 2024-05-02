// Referenciando os campos do formulário
const valorInput = document.getElementById('valor');
const errorMessage = document.getElementById('error-message');

// Função para realizar o saque
function sacar() {
    const valor = parseFloat(valorInput.value);

    // Validar se o valor é positivo
    if (valor <= 0) {
        errorMessage.textContent = 'Por favor, insira um valor positivo.';
        return;
    }

    // Lógica para realizar o saque usando o Firebase Realtime Database ou Firestore

    // Exibir mensagem de confirmação
    alert('Saque realizado com sucesso!');
}

// Função para voltar para a página anterior
function voltar() {
    window.history.back();
}
