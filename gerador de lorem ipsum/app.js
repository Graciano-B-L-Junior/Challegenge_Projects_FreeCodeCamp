let paragrafo = document.querySelector('.gerar-Lorem')
let botao = document.querySelector('.btn')
function gerarTexto(){
    var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
    fetch('https://loripsum.net/api/10/short/headers',myInit)
    .then(resultado =>{
        return resultado.text()
    }).then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })
}
botao.addEventListener("click",()=>{
    gerarTexto()
})

