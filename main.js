console.log("Está funcionando!")

const resultado = document.querySelector('.resultado')
const painel1 = document.querySelector('#par-ou-impar')
const painel2 = document.querySelector('#escolha-nums')
const botaoJogar = document.querySelector('.botao-jogar')
const botaoJogarNovamente = document.querySelector('.botao-jogar-novamente')

const exibicaoParImpar = document.querySelector('#escolha-pi')
const exibicaoNumeroUsuario = document.querySelector('#escolha-nu')
const exibicaoNumeroComputador = document.querySelector('#escolha-nc')
const exibicaoVencdedor = document.querySelector('#exibicao-vencedor')

// Inicializamos as variáveis com -1 para o caso do usuário clicar em jogar direto
parOuImpar = -1
numeroUsuario = -1

// Indica que o botão foi selecionado, alterando sua cor
function selecionar(id) {
    const botao = document.getElementById(id)
    botao.classList.add('selecionado')
}

// Reseta o estado dos botões
function tirarSelecao() {
    document.getElementById('bp').classList.remove('selecionado')
    document.getElementById('bi').classList.remove('selecionado')

    for(i = 0; i <= 5; i++) {
        document.getElementById('b' + i).classList.remove('selecionado')
    }
}

// Recebe e guarda se o usuário escolheu par ou ímpar
function escolherParOuImpar(parOuImpar) {
    this.parOuImpar = parOuImpar
    console.log(parOuImpar)
    painel2.style.display = 'block' // Exibe o painel para escolher numeros
    painel1.style.display = 'none' // Oculta o painel que pergunta par ou impar
    return parOuImpar
}

// Converte o número em texto para ser exibido no resultado final do jogo
function gerarTextoEscolhaUsuario() {
    if (parOuImpar == 0) {
        textoParOuImpar = "Par"
    } else if (parOuImpar == 1) {
        textoParOuImpar = "Ímpar"
    }
    return textoParOuImpar
}

// Recebe e guarda o número que o usuário escolheu
function escolherNumero(numeroUsuario) {
    this.numeroUsuario = numeroUsuario
    console.log(numeroUsuario)
    desabilitarBotoes()
    document.getElementById('b' + numeroUsuario).classList.add('selecionado')
    return numeroUsuario
}

// Gera e guarda o número aleatório escolhido pelo computador
function escolherNumeroComputador() {
    numeroComputador = Math.floor(Math.random() * 5)
    console.log(numeroComputador)
    return numeroComputador
}

// Reset para habilitar novamente os botões dos números
function habilitarBotoes() {
    for(i = 0; i <= 5; i++) {
        document.getElementById('b' + i).removeAttribute('disabled')
        document.getElementById('b' + i).classList.add('botao-std')
        document.getElementById('b' + i).classList.remove('desabilitado')
    }
}


// Desabilitar os botões dos números
function desabilitarBotoes() {
    for(i = 0; i <= 5; i++) {
        document.getElementById('b' + i).setAttribute('disabled', true)
        document.getElementById('b' + i).classList.remove('botao-std')
        document.getElementById('b' + i).classList.add('desabilitado')
    }
}

// Verifica quem foi o vencedor
function verificarVencedor() {
    console.log('Par ou ímpar? ' + parOuImpar)
    console.log('Escolha usuario: '+ numeroUsuario)
    console.log('Escolha computador: ' + numeroComputador)

    if ((numeroUsuario + numeroComputador) % 2 == parOuImpar) {
        vencedor = "Usuário"
    }
    else {
        vencedor = "Computador"
    }
    return vencedor
}

// Lógica principal do jogo
function jogarParOuImpar() {
    console.log('Par ou ímpar? ' + parOuImpar)
    console.log('Escolha usuario : ' + numeroUsuario)
    // Se o usuário não escolher nada...
    if (parOuImpar == -1) {
        alert('Escolha entre par ou ímpar!')
    }
    else if (numeroUsuario == -1) {
        alert('Escolha um número!')
    }
    //Se ele escolher...
    else {
        painel2.style.display = 'none'
        // resultado.innerHTML = "<h2 class='mensagem centralizado'>Resultado:</h2>"
        parOuImparTexto = gerarTextoEscolhaUsuario()
        escolherNumeroComputador()
        nomeVencedor = verificarVencedor()
        console.log(nomeVencedor + " venceu!")

        exibicaoParImpar.innerHTML += '<div class="texto-exibicao">' + parOuImparTexto + '</div>'
        exibicaoNumeroUsuario.innerHTML += '<div class="numero-exibicao">' + numeroUsuario + '</div>'
        exibicaoNumeroComputador.innerHTML += '<div class="numero-exibicao">' + numeroComputador + '</div>'
        exibicaoVencdedor.innerHTML = vencedor == "Usuário" ? "<p class='vencedor voce-venceu'>Parabéns! você venceu!</p>" : "<p class='vencedor voce-perdeu'>Que pena! Você perdeu!</p>"
        resultado.style.display = 'block'
        botaoJogar.style.display = 'none'
        botaoJogarNovamente.style.display = 'block'
    } 
}

function jogarNovamente() {
    parOuImpar = -1
    numeroUsuario = -1
    tirarSelecao()
    painel1.style.display = 'block'
    botaoJogar.style.display = 'block'
    botaoJogarNovamente.style.display = 'none'

    exibicaoParImpar.innerHTML = '<div class="titulo-cartao-escolha">Par ou ímpar?</div>'
    exibicaoNumeroUsuario.innerHTML = '<div class="titulo-cartao-escolha">Você escolheu:</div>'
    exibicaoNumeroComputador.innerHTML = '<div class="titulo-cartao-escolha">Computador escolheu:</div>'

    resultado.style.display = 'none'
    habilitarBotoes()
}