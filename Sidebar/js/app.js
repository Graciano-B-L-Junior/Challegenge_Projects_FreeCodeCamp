const button = document.querySelector(".menu")

const closeButton = document.querySelector(".closeMenu")

button.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar")
    if(sidebar.classList.contains("deactive")){
        sidebar.classList.remove("deactive")
        sidebar.classList.add("active")
    }else{
        sidebar.classList.remove("active")
        sidebar.classList.add("deactive")
    }
})

closeButton.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.remove("active")
    sidebar.classList.add("deactive")
})

