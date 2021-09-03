let indice = 0;
const nomePessoa = document.querySelector('.nome')

const profissao = document.querySelector('.profissao')

const pessoaDescricao = document.querySelector('.person-description')

const trocaFoto = document.querySelector('.foto')

const butaoAleatorio = document.querySelector('.surprise')


const buttonLeft = document.querySelector('.Left')
const buttonRight = document.querySelector('.Right')

function trocaIndice(valor) {
    indice += valor;
    if (indice < 0) {
        indice = fotos.length - 1
    }
    if (indice > fotos.length - 1) {
        indice = 0
    }
    trocaFoto.style.backgroundImage = fotos[indice];
    nomePessoa.innerHTML = nomes[indice]
    profissao.innerHTML = profissoes[indice]
    pessoaDescricao.innerHTML = descricaoPessoas[indice]

}

function aletoriaIndice(){
    indice = Math.floor(Math.random()*fotos.length)
    trocaFoto.style.backgroundImage = fotos[indice];
    nomePessoa.innerHTML = nomes[indice]
    profissao.innerHTML = profissoes[indice]
    pessoaDescricao.innerHTML = descricaoPessoas[indice]
}
const fotos = [
    "url('./assets/foto1.jpg')",
    "url('./assets/foto2.jpg')",
    "url('./assets/foto3.jpg')",
    "url('./assets/foto4.jpg')",
];

const nomes = [
    'Susan Smith',
    'Felipe Smith',
    'Katrina Erica',
    'Casa Grande'

]

const profissoes = [
    'Web Developer',
    'UX design',
    'Back-end developer',
    'Mobile developer',
]

const descricaoPessoas = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
    aliquet ligula. Mauris sed arcu et felis molestie ornare. Praesent sed vehicula nulla. Donec
    viverra blandit vulputate. Aliquam posuere at nisl vitae efficitur. Fusce aliquet lacus dui,
    eget pharetra dolor sollicitudin ut.`,
    `Integer vulputate dolor velit, in commodo velit pretium in. Nunc id porttitor ante, at imperdiet velit. Aliquam erat volutpat. Maecenas at tempus dui, et volutpat ex. Fusce porttitor ipsum ac dolor volutpat luctus. Donec aliquam ullamcorper consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam blandit, .`,
    `Donec faucibus odio nec molestie placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed semper dui. Suspendisse sem risus, fringilla id mauris eu, gravida gravida dolor.`,
    `Sed ut efficitur nunc. Sed sed odio nec justo finibus eleifend. Morbi finibus magna nec ante aliquam, sit amet faucibus ipsum scelerisque. Donec lobortis erat sodales vulputate dapibus. Vivamus sed tincidunt tortor, euismod commodo sapien. Aenean fermentum diam sed lectus malesuada, et tincidunt nibh aliquet. Fusce id bibendum erat. Cras ac leo felis.`
]

buttonLeft.addEventListener("click", () => trocaIndice(-1))
buttonRight.addEventListener("click", () => trocaIndice(1))
butaoAleatorio.addEventListener("click",aletoriaIndice)


