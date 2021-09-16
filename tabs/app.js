let titulos =["Historia","Visão","Metas"]
let conteudos=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, elit vitae tristique imperdiet, urna nisi porta est, ut venenatis tortor risus a lacus. Phasellus fringilla suscipit ipsum, sed mollis arcu condimentum vitae. Vestibulum lectus ipsum, dictum sit amet gravida a, porttitor et est",
    "Nulla vitae iaculis dolor. Suspendisse sagittis congue ligula ac ultrices. Praesent tellus urna, imperdiet ut dui at, posuere aliquam tortor. Morbi feugiat nisl velit, tincidunt porttitor quam vulputate ut.",
    "Nulla facilisi. Praesent sed mi tincidunt, mollis lorem in, hendrerit augue. Donec non lorem eget tellus mattis convallis. Nulla non enim vehicula, pretium nisl ut, cursus ipsum."    
]

let titulo = document.querySelector("h3")
let conteudo = document.querySelector('.container-informacoes p')

let links = document.querySelectorAll("a")
links.forEach((val,index)=>{
    val.addEventListener("click",(e)=>{
        e.preventDefault()
        titulo.innerHTML = titulos[index]
        conteudo.innerHTML = conteudos[index]
    })
})