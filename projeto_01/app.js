function subir(){
    window.scroll({ top: 0, behavior: 'smooth' });
}

let sobe = document.querySelector('.sobe')
sobe.addEventListener("click",()=>{
    window.scroll(0,0)
})

let header = document.getElementsByTagName("header")[0]
let links = document.querySelectorAll('.overlay header ul li a')

window.onscroll = function(){
    if(window.scrollY<100){
        sobe.style.display="none"
        header.style.backgroundColor = "rgba(0,0,0,0)"
        links.forEach(link=>link.style.color="white")
    }else{
        header.style.backgroundColor = "white"
        sobe.style.display="block"
        links.forEach(link=>link.style.color="black")
    }
}

let sobre = document.getElementById("sobre")
let servicos = document.getElementById("servicos")
let memes = document.getElementById("memes")
let btnMeme = document.getElementById("btnMeme")


sobre.addEventListener("click",(e)=>{
    e.preventDefault()
    let div = document.querySelector(".sobre")
    console.log()
    window.scroll(0,div.getBoundingClientRect().top)
})
servicos.addEventListener("click",(e)=>{
    e.preventDefault()
    let div = document.querySelector(".servicos")
    console.log()
    window.scroll(0,div.getBoundingClientRect().top)
})
memes.addEventListener("click",(e)=>{
    e.preventDefault()
    let div = document.querySelector(".memes")
    console.log()
    window.scroll(0,div.getBoundingClientRect().top)
})
btnMeme.addEventListener("click",(e)=>{
    e.preventDefault()
    let div = document.querySelector(".memes")
    console.log()
    window.scroll(0,div.getBoundingClientRect().top)
})