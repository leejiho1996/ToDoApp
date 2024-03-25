const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${String(hours)}:${String(minutes)}:${String(seconds)}`;
}

getClock();
setInterval(getClock, 1000); // 단위 ms 
// setTimeout(sayHello, 3000); 지연

