function addItem(item) {
    return `<div class="item">
    <p>${item}</p>
    <div class="editIem">
        <button><i class="fas fa-edit"></i></button>
        <button><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>`
}


let submit = document.querySelector('#enviar')
let listaItems = document.querySelector('.items-list')
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let valorInput = document.querySelector('#item')
    if(valorInput.value!=''){
        let novoResultado = addItem(valorInput.value)
        listaItems.insertAdjacentHTML('afterbegin',novoResultado)
    }
    valorInput.value=''
})