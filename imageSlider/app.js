let indiceAtual=0;
let bloqueioSlider=false;
let bloqueioProximoSlider=false;
let bloqueioSliderAnterior=false;
document.querySelectorAll("img").forEach((val,index)=>{
    if(val.getAttribute("id")=="ativo"){
        indiceAtual=index
    }
})
document.querySelectorAll("button").forEach(val=>{
    val.addEventListener("click",()=>{
        bloqueioSlider=true;
    })
})

function ProximoSlider() {
    indiceAtual--;
    if(indiceAtual<0){
       let imgs = document.querySelectorAll("img")
       imgs[imgs.length-1].style.zIndex="0"
    }else{
        document.querySelectorAll("img")[indiceAtual].style.zIndex="0"
    }
    let img = document.querySelector("#ativo")
    img.style.zIndex="1"
    let posicaoImagem = 1;
    let movendo = setInterval(() => {
        posicaoImagem++
        img.style.left = `${posicaoImagem}%`
        if (posicaoImagem > 99) {
            clearInterval(movendo)
            img.style.zIndex="-1"
            img.style.left="1%"
            img.removeAttribute('id')
            if(indiceAtual<0){
                indiceAtual=document.querySelectorAll("img").length-1
                document.querySelectorAll("img")[indiceAtual].setAttribute("id","ativo")
            }else{
                document.querySelectorAll("img")[indiceAtual].setAttribute("id","ativo")
            }
        }
    }, 20)
}

function sliderAnterior(){
    indiceAtual++;
    if(indiceAtual>document.querySelectorAll("img").length-1){
        let imgs = document.querySelectorAll("img")
        imgs[0].style.zIndex="0"
     }else{
         document.querySelectorAll("img")[indiceAtual].style.zIndex="0"
     }
    let img = document.querySelector("#ativo")
    img.style.zIndex="1"
    let posicaoImagem = 1;
    let movendo = setInterval(() => {
        posicaoImagem--
        img.style.left = `${posicaoImagem}%`
        if (posicaoImagem < -99) {
            clearInterval(movendo)
            img.style.zIndex="-1"
            img.style.left="1%"
            img.removeAttribute('id')
            if(indiceAtual>document.querySelectorAll("img").length-1){
                indiceAtual=0
                document.querySelectorAll("img")[indiceAtual].setAttribute("id","ativo")
            }else{
                document.querySelectorAll("img")[indiceAtual].setAttribute("id","ativo")
            }
        }
    }, 20)
}