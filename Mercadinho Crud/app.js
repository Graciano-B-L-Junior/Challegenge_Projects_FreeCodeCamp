let numeroItems = 0;
let update = false;
let indiceItem = 0;
function addItem(item, indice) {
    return `<div class="item" id=${indice}>
    <p>${item}</p>
    <div class="editIem">
        <button onclick=editarItem(${indice})><i class="fas fa-edit"></i></button>
        <button onclick=deleteItem(${indice})><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>`
}

let submit = document.querySelector('#enviar')
let listaItems = document.querySelector('.items-list')
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let valorInput = document.querySelector('#item')
    if (update == false) {
        if (valorInput.value != '') {
            let novoResultado = addItem(valorInput.value, numeroItems)
            numeroItems++;
            listaItems.insertAdjacentHTML('afterbegin', novoResultado)
        }
    } else {
        let item = document.getElementById(indiceItem)
        if (valorInput.value != '') {
            let p = item.children[0]
            p.textContent = valorInput.value
            update = false;
            indiceItem = null
        }
    }
    valorInput.value = ''
})

function deleteItem(indice) {
    let item = document.getElementById(indice)
    item.remove()
}

function deleteAll() {
    let elementos = document.querySelectorAll('.item')
    elementos.forEach(val => val.remove())
}

function editarItem(indice) {
    let item = document.getElementById(indice)
    let valorInput = document.querySelector('#item')
    let teste = item.children[0]
    valorInput.value = teste.textContent
    update = true
    indiceItem = indice
}

