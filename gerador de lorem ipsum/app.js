let paragrafo = document.querySelector('.gerar-Lorem')

let botao = document.querySelector('.btn')
function gerarTexto(){
    let  input = document.getElementsByTagName('input')[0].value
    var myHeaders = new Headers();
    fetch('https://baconipsum.com/api/?callback=?paras='+input)
    .then(resultado =>{
        return resultado.text()
    }).then(res=>{
        //console.log(res)
        res=res.replace('[','')
        res=res.replace(']','')
        res=res.replace(/['"']+/g,'')
        paragrafo.innerHTML=res
    })
    .catch(e=>{
        console.log(e)
    })
}
botao.addEventListener("click",()=>{
    gerarTexto()
})


