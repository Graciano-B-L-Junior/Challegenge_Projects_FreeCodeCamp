let pontuacaoPlayer=0
let pontuacaoComputer=0

let jogoStart = false;

let placarPlayer = document.querySelector("#playerPoints")
let placarComputador = document.querySelector("#computerPoints")
let textoResultado = document.querySelector("#resultado")

let pedra = document.querySelector("#pedra")
let papel = document.querySelector("#papel")
let tesoura = document.querySelector("#tesoura")

function limpaBorda(){
    pedra.style.border="2px solid white"
    papel.style.border="2px solid white"
    tesoura.style.border="2px solid white"
}

function lancarJogada(jogada){
    if(jogoStart==false){
        
        jogoStart = true;
        let listaDeJogadas = ["pedra","papel","tesoura"]
        let inidiceJogadaPC = Math.floor(Math.random()*(3))
        let jogadaPC = listaDeJogadas[inidiceJogadaPC]
        if(jogada=="pedra"&&jogadaPC=="tesoura"){
            tesoura.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do jogador"
            pontuacaoPlayer++
        }
        if(jogada=="tesoura"&&jogadaPC=="papel"){
            papel.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do jogador"
            pontuacaoPlayer++
        }
        if(jogada=="papel"&&jogadaPC=="pedra"){
            pedra.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do jogador"
            pontuacaoPlayer++
        }
        if(jogadaPC=="pedra"&&jogada=="tesoura"){
            pedra.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do computador"
            pontuacaoComputer++
        }
        if(jogadaPC=="tesoura"&&jogada=="papel"){
            tesoura.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do computador"
            pontuacaoComputer++
        }
        if(jogadaPC=="papel"&&jogada=="pedra"){
            papel.style.border="2px solid red"
            textoResultado.innerHTML="Vitoria do computador"
            pontuacaoComputer++
        }
        if(jogada=="pedra"&&jogadaPC=="pedra"){
            pedra.style.border="2px solid grey"
            textoResultado.innerHTML="empate"
        }
        if(jogada=="tesoura"&&jogadaPC=="tesoura"){
            tesoura.style.border="2px solid grey"
            textoResultado.innerHTML="empate"
        }
        if(jogada=="papel"&&jogadaPC=="papel"){
            papel.style.border="2px solid grey"
            textoResultado.innerHTML="empate"
        }
        
        placarPlayer.innerHTML=pontuacaoPlayer.toString()
        placarComputador.innerHTML=pontuacaoComputer.toString()
        jogoStart=false;
    }
}

pedra.addEventListener("click",()=>{
    limpaBorda()
    pedra.style.border="2px solid green"
    lancarJogada("pedra")
})
papel.addEventListener("click",()=>{
    limpaBorda()
    papel.style.border="2px solid green"
    lancarJogada("papel")
})
tesoura.addEventListener("click",()=>{
    limpaBorda()
    tesoura.style.border="2px solid green"
    lancarJogada("tesoura")
})


