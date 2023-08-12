// const header = document.querySelector("header");
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {
//     if (lastScrollY < window.scrollY) {
//         header.classList.add("header--hidden");
//     } else {
//         header.classList.remove("header--hidden");
//     }
    
//     lastScrollY = window.scrollY;
// });
document.addEventListener("DOMContentLoaded", function() {
  const scrollDownElement = document.querySelector("header");
  const logoImage = document.getElementById("logotipo");

  window.addEventListener("scroll", function() {
    const triggerPoint = window.innerHeight * 0.85; // Cambia este valor según sea necesario

    if (window.scrollY > triggerPoint) {
      scrollDownElement.classList.add("active");
      logoImage.src = "./assets/img/imagotipo-black.svg";
    } else {
      scrollDownElement.classList.remove("active");
      logoImage.src = "./assets/img/imagotipo-white.svg";
    }
  });
});

let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  
  wave1.style.backgroundPositionX = 400 + value + 'px';
  wave2.style.backgroundPositionX = 300 + value + 'px';
  wave3.style.backgroundPositionX = 200 + value + 'px';
  wave4.style.backgroundPositionX = 100 + value + 'px';
})