const slider = document.querySelector('.slider')

slider.addEventListener("click",()=>{
    video = document.getElementById("abertura")
    if(slider.classList.contains("Pause")){
        slider.style.right = "56px"
        slider.classList.remove("Pause")
        video.pause();
    }else{
        slider.style.right = "3.5px"
        slider.classList.add("Pause")
        if(video.paused){
            video.play()
        }
    }
    console.log('oi')
})