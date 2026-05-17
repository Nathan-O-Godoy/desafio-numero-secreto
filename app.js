const numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroLimite) + 1;
}

function verificarChute() {

    const input = document.getElementById('inputNumero');

    const chute = Number(input.value);

    const mensagem = document.getElementById('mensagem');


    // VALIDAÇÃO

    if (chute < 1 || chute > numeroLimite || isNaN(chute)) {

        mensagem.innerHTML = `Digite um número entre 1 e ${numeroLimite}`;

        return;
    }


    // ACERTOU

    if (chute === numeroSecreto) {

        mensagem.innerHTML =
            `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;


    // ERROU

    } else {

        if (chute > numeroSecreto) {

            mensagem.innerHTML = 'O número secreto é menor';

        } else {

            mensagem.innerHTML = 'O número secreto é maior';
        }

        tentativas++;
    }

    input.value = '';
}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();

    tentativas = 1;

    document.getElementById('mensagem').innerHTML =
        `Escolha um número entre 1 e ${numeroLimite}`;

    document.getElementById('inputNumero').value = '';
}
