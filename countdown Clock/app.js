let data = new Date();

let dataSoteio = document.querySelector('.data-sorteio')


data.setDate(data.getDate() + 2)
dataSoteio.innerHTML = `O sorteio acaba na data ${((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()} com horario e tudo`
let dias = document.querySelector('#dias')
let horas = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')
let x= setInterval(function () {
    let now = new Date().getTime();
    let distance = data - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    dias.innerHTML = days;
    horas.innerHTML=hours;
    minutos.innerHTML=minutes;
    segundos.innerHTML = seconds;
    if(distance<0){
        clearInterval(x)
    }
}, 1000)