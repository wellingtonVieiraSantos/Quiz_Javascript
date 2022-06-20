//objeto com as perguntas e respostas
const perguntas = [{
        questao: 'É uma biblioteca/framework Javascript.',
        alternativas: [
            'Laravel',
            'Bootstrap',
            'React',
            'Django'
        ],
        resposta: 2
    },
    {
        questao: 'Não é um dos pilares da POO(Programação Orientada a Objetos).',
        alternativas: [
            'Encapsulamento',
            'Abstração',
            'Polimorfismo',
            'Recursão'
        ],
        resposta: 3
    },
    {
        questao: 'Qual método de iteração de Arrays em Javascript retorna true ou false.',
        alternativas: [
            'some',
            'map',
            'find',
            'forEach'
        ],
        resposta: 0
    },
    {
        questao: 'Qual o seletor jQuery?',
        alternativas: [
            '%',
            '$',
            '#',
            '&'
        ],
        resposta: 1
    },
    {
        questao: 'No HTML5, qual dessas tags não é mais recomendada o uso.',
        alternativas: [
            'small',
            'big',
            'strong',
            'em'
        ],
        resposta: 1
    },
    {
        questao: 'Qual é o seletor de classe no CSS?',
        alternativas: [
            'Arroba',
            'Jogo da velha',
            'Porcento',
            'Ponto'
        ],
        resposta: 3
    },
    {
        questao: 'Não é um valor da propriedade "display" em CSS',
        alternativas: [
            'none',
            'table',
            'run',
            'block'
        ],
        resposta: 2
    },
    {
        questao: 'Qual desses métodos do DOM retorna uma NodeList?',
        alternativas: [
            'querySelectorAll',
            'getElementById',
            'getElementsByTagName',
            'querySelector'
        ],
        resposta: 0
    }
]

embaralhar(perguntas)

function embaralhar(array){
    array.sort(() => Math.random() -0.5)
}

const corpo = document.querySelector('.corpo')
const btnIniciar = document.querySelector('#inicio')
const resultado = document.querySelector('.resultado')
let btnReiniciar = document.querySelector('#reiniciar')
btnReiniciar.disabled = true
const btnDisabled = document.querySelectorAll('.btn-block')
perguntas.indexOf = 0
let pontos = 0

//click inicio do jogo
btnIniciar.addEventListener('click', iniciar)

//funçao inicio do jogo

function iniciar() {
    layout(perguntas.indexOf)
    verificarCorreta()
    resultado.innerText = ''
    //usar um forEach...
    btnDisabled.forEach(e => {
        e.disabled = true
    })
    btnReiniciar.disabled = false
}

//função passar para proxima questao
function proximaQuestao() {
    ++perguntas.indexOf
    if (perguntas.indexOf > perguntas.length - 1) {
        apagarTela()
        const ponto = document.createElement('span')  
        ponto.setAttribute('class', 'resultado') 
       if(pontos > perguntas.length*5) {

        ponto.innerText += `Parabéns, você fez ${pontos} pontos`
       }else{
 
        ponto.innerText += `Continue estudando, você fez ${pontos} pontos`
       }
        corpo.appendChild(ponto)
        btnDisabled.forEach(e => {
            e.disabled = false
        })
        btnReiniciar.disabled = true
        resultado.innerText = 'Obrigado por jogar meu quiz.'
    } else {
        iniciar()
    }
}

function verificarCorreta() {
    const button = [...document.querySelectorAll('.btn')]
    button.forEach(function(elem) {

        elem.addEventListener('click', () => {

            if (button.indexOf(elem) == perguntas[perguntas.indexOf].resposta) {
               
                elem.setAttribute('id', 'correta')
                pontos += 10

                bloqueio()
                resultado.innerText = 'Parabéns, você acertou!'
                setTimeout(proximaQuestao, 2000)

            } else {

                elem.setAttribute('id', 'errada')
                bloqueio()
                resultado.innerText = 'Que pena, você errou!'
                setTimeout(proximaQuestao, 2000)

            }
        })

    })

}

function bloqueio() {
    const button = document.querySelectorAll('.btn')
    button.forEach(function(elem) {
        elem.disabled = true
    })
    btnReiniciar.disabled = true
}

function layout(elem) {

    apagarTela()
    //criando a pergunta na tela
    const quest = document.createElement('p')
    quest.setAttribute('id', 'quest')
    quest.innerHTML = `${perguntas[elem].questao}`
    corpo.appendChild(quest)
    //criando na tela as alternativas
    for (let value of perguntas[elem].alternativas) {
        const btn = document.createElement('button')
        btn.setAttribute('class', 'btn')
        btn.innerText = value
        corpo.appendChild(btn)
    }
    //criando um marcador
    const marcador = document.createElement('input')
    const label = document.createElement('label')

    //add as propriedades do input marcador
    Object.assign(marcador, {
        id: 'marcador',
        type: 'range',
        min: 0,
        max: perguntas.length - 1,
        value: elem,
        disabled: true
    })

    label.setAttribute('for', 'marcador')
    label.innerText = `${perguntas.indexOf+1} de ${perguntas.length}`
    corpo.appendChild(marcador)
    corpo.appendChild(label)

}

document.querySelector('#reiniciar').addEventListener('click', reiniciar)

function reiniciar() {
    embaralhar(perguntas)
    perguntas.indexOf = 0
    pontos = 0
    corpo.innerText = 'Reiniciando o Jogo...'
    btnReiniciar.disabled = true
    setTimeout(iniciar, 2000)
}


document.querySelector('#apresentacao').addEventListener('click', function() {
    apagarTela()
    const textoApresentacao = document.createElement('p')
    textoApresentacao.setAttribute('id', 'textoApresentacao')
    textoApresentacao.innerText = `Esse é  um quiz de página única sobre HTML-CSS-Javascript, feito com essas tecnologias, sem uso de bibliotecas ou frameworks e sem uso de um banco de dados.`
    corpo.appendChild(textoApresentacao)
})

document.querySelector('#autores').addEventListener('click', function() {
    apagarTela()
    const textoAutores = document.createElement('p')
    textoAutores.setAttribute('id', 'textoAutores')
    textoAutores.innerText = `Wellington Vieira - Dev Web`
    corpo.appendChild(textoAutores)
})

document.querySelector('#home').addEventListener('click', telaInicial)

function telaInicial() {
    perguntas.indexOf = 0
    pontos = 0
    apagarTela()
    const span = document.createElement('span')
    const btn = document.createElement('input')

    span.innerText = `Quiz Game`
    Object.assign(btn, {
        type: 'button',
        value: 'Iniciar',
        class: 'btn',
        id: 'inicio'
    })

    corpo.appendChild(span)
    corpo.appendChild(btn)

    resultado.innerText = `Bem vindo ao Quiz Game, vamos começar?`
    document.querySelector('#inicio').addEventListener('click', iniciar)
}

function apagarTela(){
    corpo.innerText = ''
}
