let allBtn = document.querySelector('.all_btn')
let cafeBtn = document.querySelector('.cafe_btn')
let almocoBtn = document.querySelector('.almoco_btn')
let sucosBtn = document.querySelector('.sucos_btn')

allBtn.addEventListener("click",()=>{
    const itens_almoco = document.querySelectorAll('.almoco')
    itens_almoco.forEach(val=>{
        val.style.display="block"
    })
    const itens_cafe = document.querySelectorAll('.cafe')
    itens_cafe.forEach(val=>{
        val.style.display="block"
    })
    const itens_suco = document.querySelectorAll('.suco')
    itens_suco.forEach(val=>{
        val.style.display="block"
    })
})
cafeBtn.addEventListener("click",()=>{
    const itens_almoco = document.querySelectorAll('.almoco')
    itens_almoco.forEach(val=>{
        val.style.display="none"
    })
    const itens_cafe = document.querySelectorAll('.cafe')
    itens_cafe.forEach(val=>{
        val.style.display="block"
    })
    const itens_suco = document.querySelectorAll('.suco')
    itens_suco.forEach(val=>{
        val.style.display="none"
    })
})
almocoBtn.addEventListener("click",()=>{
    const itens_almoco = document.querySelectorAll('.almoco')
    itens_almoco.forEach(val=>{
        val.style.display="block"
    })
    const itens_cafe = document.querySelectorAll('.cafe')
    itens_cafe.forEach(val=>{
        val.style.display="none"
    })
    const itens_suco = document.querySelectorAll('.suco')
    itens_suco.forEach(val=>{
        val.style.display="none"
    })
})
sucosBtn.addEventListener("click",()=>{
    const itens_almoco = document.querySelectorAll('.almoco')
    itens_almoco.forEach(val=>{
        val.style.display="none"
    })
    const itens_cafe = document.querySelectorAll('.cafe')
    itens_cafe.forEach(val=>{
        val.style.display="none"
    })
    const itens_suco = document.querySelectorAll('.suco')
    itens_suco.forEach(val=>{
        val.style.display="block"
    })
})