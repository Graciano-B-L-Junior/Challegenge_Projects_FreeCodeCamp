function trocaCorHex(){
    let listaHexa = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let corHexaDecimal=""
    for(i=0;i<6;i++){
        let resultado = Math.floor(Math.random()*(listaHexa.length-0))
        corHexaDecimal+=`${listaHexa[resultado]}`;
    }
    corHexaDecimal = ['#',corHexaDecimal].join('')
    const background = document.querySelector('.background')
    const textColor = document.querySelector('.mudarCor')
    background.style.backgroundColor = corHexaDecimal
    textColor.textContent = corHexaDecimal
}

const botao = document.querySelector('.botao')

botao.addEventListener("click",trocaCorHex)