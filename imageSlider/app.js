let indiceAtual=0;
document.querySelectorAll("img").forEach((val,index)=>{
    if(val.getAttribute("id")=="ativo"){
        indiceAtual=index
    }
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
    let posicaoAtual = 1;
    let movendo = setInterval(() => {
        posicaoAtual++
        img.style.left = `${posicaoAtual}%`
        if (posicaoAtual > 99) {
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