const modalButton = document.getElementsByClassName('buttonModal')[0]
const closeModalButton = document.getElementsByClassName('buttonModalClose')[0]

modalButton.addEventListener("click",()=>{
    let overlay = document.querySelector('.overlayer')
    overlay.style.display = "block"
})
closeModalButton.addEventListener("click",()=>{
    let overlay = document.querySelector('.overlayer')
    overlay.style.display = "none"
})