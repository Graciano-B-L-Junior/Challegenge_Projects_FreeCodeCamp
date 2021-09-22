let numeroItems = 0;

function addItem(item, indice) {
    return `<div class="item" id=${indice}>
    <p>${item}</p>
    <div class="editIem">
        <button><i class="fas fa-edit"></i></button>
        <button onclick=deleteItem(${indice})><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>`
}

let submit = document.querySelector('#enviar')
let listaItems = document.querySelector('.items-list')
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let valorInput = document.querySelector('#item')
    if (valorInput.value != '') {
        let novoResultado = addItem(valorInput.value, numeroItems)
        numeroItems++;
        listaItems.insertAdjacentHTML('afterbegin', novoResultado)
    }
    valorInput.value = ''
})

function deleteItem(indice) {
    let item = document.getElementById(indice)
    item.remove()
}

function deleteAll(){
    let elementos = document.querySelectorAll('.item')
    elementos.forEach(val=>val.remove())
}

