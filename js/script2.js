const quests = [{
        questao: 'É uma biblioteca/framework Javascript.',
        alternativas: [
            ['Laravel', false],
            ['Bootstrap', false],
            ['React', true],
            ['Django', false]
        ]
    },
    {
        questao: 'Não é um dos pilares da POO(Programação Orientada a Objetos).',
        alternativas: [
            ['Encapsulamento', false],
            ['Abstração', false],
            ['Polimorfismo', false],
            ['Recursão', true]
        ]

    },
    {
        questao: 'Qual método de iteração de Arrays em Javascript retorna true ou false.',
        alternativas: [
            ['some', false],
            ['map', false],
            ['find', true],
            ['forEach', false]
        ]
    },
    {
        questao: 'Qual o seletor jQuery?',
        alternativas: [
            ['%', false],
            ['$', true],
            ['#', false],
            ['&', false]
        ]
    },
    {
        questao: 'No HTML5, qual dessas tags não é mais recomendada o uso.',
        alternativas: [
            ['small', false],
            ['big', true],
            ['strong', false],
            ['em', false]
        ]
    },
    {
        questao: 'Qual é o seletor de classe no CSS?',
        alternativas: [
            ['Hashtag', false],
            ['Jogo da Velha', false],
            ['Porcento', false],
            ['Ponto', true]
        ]
    }
]


const corpo = document.querySelector('.corpo')
const iniciar = document.querySelector('#inicio')
let pontos = 0
quests.indexOf = 0
console.log(quests[quests.indexOf].alternativas[2].indexOf(true));

function layout(elem) {
    corpo.innerText = ''

    const quest = document.createElement('p')
    quest.setAttribute('id', 'quest')
    quest.innerText = `${quests[elem].questao}`
    corpo.appendChild(quest)

    for (let value of quests[elem].alternativas) {
        const btn = document.createElement('button')
        btn.setAttribute('class', 'btn')
        btn.innerText = value[0]
        corpo.appendChild(btn)
    }

}

iniciar.addEventListener('click', nextQuestion)

function nextQuestion() {
    if (quests.indexOf > quests.length - 1) {
        corpo.innerText = 'FIM DO JOGO'
    } else {
        layout(quests.indexOf)
        clickButton()
    }
    quests.indexOf++
}

function clickButton() {
    const button = [...document.querySelectorAll('.btn')]
    button.forEach(function(elem) {

        elem.addEventListener('click', () => {
            console.log(button.indexOf(elem));
            console.log('teste fora');
            if (button.indexOf(true) > -1) {
                console.log('teste dentro');
            }
        })

    })

}

function verificarAcerto(elem) {
    console.log('teste fora');
    if (quests[quests.indexOf].alternativas[elem].indexOf(true) > -1) {
        console.log('teste dentro');
    }
}