
const botao = document.querySelector('.botao')
const textColor = document.querySelector('.mudarCor')

let colors = ['green','red','rgb(133,122,200)',trocaCorHex()]


function trocaCor(){
    let resultado = Math.floor(Math.random()*(colors.length-0))
    const background = document.querySelector('.background')
    background.style.backgroundColor = colors[resultado]
    textColor.textContent = colors[resultado]
}

botao.addEventListener("click",trocaCor)

function trocaCorHex(){
    let listaHexa = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let corHexaDecimal=""
    for(i=0;i<6;i++){
        let resultado = Math.floor(Math.random()*(listaHexa.length-0))
        corHexaDecimal+=`${listaHexa[resultado]}`;
    }
    corHexaDecimal = ['#',corHexaDecimal].join('')
    return corHexaDecimal;
}