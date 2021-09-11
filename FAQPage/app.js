
const buttons = document.querySelectorAll('.cardInfoShow')
const cardInfo = document.querySelectorAll('.card-info')
btnClosed = '<i class="far fa-plus-square"></i>'
btnOpen = '<i class="far fa-minus-square"></i>'
buttons.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        cardInfo.forEach((val, index) => {
            if (index == indice) {
                if(val.classList.contains("show-card")){
                    btn.innerHTML = btnClosed
                    val.classList.remove("show-card")
                }else{
                    btn.innerHTML = btnOpen
                    val.classList.add("show-card")
                }
                
            } else {
                val.classList.remove("show-card")
                buttons[index].innerHTML = btnClosed
            }
        })

    })
})