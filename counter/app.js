let valor=0
const diminuir = document.getElementById('diminuir')
const resetar = document.getElementById('resetar')
const aumentar = document.getElementById('aumentar')
const contador  = document.getElementById("contador")
function diminuirValor(){
    valor--;
    contador.innerHTML = valor
    corContador()
}
function aumentarValor(){
    valor++;
    contador.innerHTML = valor
    corContador()
}
function resetarValor(){
    valor=0;
    contador.innerHTML = valor
    corContador()
}

function corContador(){
    if(valor<0){
        contador.style.color = 'red'
    }
    if(valor==0){
        contador.style.color = 'black'
    }
    if(valor>0){
        contador.style.color = 'green'
    }
}
diminuir.addEventListener("click",diminuirValor)
aumentar.addEventListener("click",aumentarValor)
resetar.addEventListener("click",resetarValor)

