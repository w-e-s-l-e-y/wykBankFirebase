// Referenciando os campos do formulário
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const emailInput = document.getElementById('email');
const tipoContaInput = document.getElementById('tipo-conta');
const saldoInicialInput = document.getElementById('saldo-inicial');
const errorMessage = document.getElementById('error-message');

// Função para realizar o cadastro
function cadastrar() {
    const nome = nomeInput.value;
    const idade = parseInt(idadeInput.value);
    const email = emailInput.value;
    const tipoConta = parseInt(tipoContaInput.value);
    const saldoInicial = parseFloat(saldoInicialInput.value);

   // Validar se todos os campos foram preenchidos e se os valores são não negativos
   if (!nome || !idade || !email || tipoConta < 0 || saldoInicial < 0) {
    errorMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
    return;
}

    // Criar conta no Firebase Auth
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Cadastro bem-sucedido
            const user = userCredential.user;
            // Aqui você pode adicionar a lógica para salvar os detalhes do usuário no Firestore ou Realtime Database
            // Por exemplo, criar um documento para o usuário com os detalhes fornecidos

            // Redirecionar para a tela inicial ou exibir uma mensagem de sucesso
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Exibir mensagem de erro ao usuário
            errorMessage.textContent = errorMessage;
        });
}
