const images = ["img5.jpg", "img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`
document.body.style.backgroundImage = `url(${bgImage.src})`;


// bgImage.onload = function() {
    
// };
// document.body.appendChild(bgImage); // document.body.preppend(bgImage) => body의 맨앞에 요소를 집어넣음. 
