// Referenciando os campos do formulário
const contaDestinoInput = document.getElementById('conta-destino');
const valorInput = document.getElementById('valor');
const errorMessage = document.getElementById('error-message');

// Função para realizar a transferência
function transferir() {
    const contaDestino = parseFloat(contaDestinoInput.value);
    const valor = parseFloat(valorInput.value);

    // Validar se o número da conta e o valor são positivos
    if (contaDestino <= 0 || valor <= 0) {
        errorMessage.textContent = 'Por favor, insira um número de conta e um valor positivos.';
        return;
    }

    // Lógica para realizar a transferência usando o Firebase Realtime Database ou Firestore

    // Exibir mensagem de confirmação
    alert('Transferência realizada com sucesso!');
}

// Função para voltar para a página anterior
function voltar() {
    window.history.back();
}
