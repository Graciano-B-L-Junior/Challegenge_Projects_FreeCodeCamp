const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebarMenu')
menu.addEventListener("click",function(){
    if(sidebar.classList.contains('active')){
        sidebar.classList.remove('active')
        sidebar.classList.add('deactive')
    }else{
        sidebar.classList.add('active')
        sidebar.classList.remove('deactive')
    }
})