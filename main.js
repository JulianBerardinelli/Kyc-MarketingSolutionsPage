//Scroll del inicio

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const secondSection = document.querySelector("main > section:nth-of-type(2)");
  const thirdSection = document.querySelector("main > section:nth-of-type(3)");
  const fourthSection = document.querySelector("main > section:nth-of-type(4)");

  window.addEventListener("click", function (event) {
    // Verificar si el clic se realizó en el botón de Calendly
    if (!event.target.classList.contains("btn-neon") &&
    !event.target.classList.contains("btn-neons"))  {
      let scrollToSection;

      if (window.scrollY < secondSection.offsetTop) {
        scrollToSection = secondSection;
      } else if (window.scrollY < thirdSection.offsetTop) {
        scrollToSection = thirdSection;
      } else if (window.scrollY < fourthSection.offsetTop) {
        scrollToSection = fourthSection;
      } 
      
      if (scrollToSection) {
        window.scrollTo({
          top: scrollToSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

//ub waves
// Obtén la altura del dispositivo en unidades vh
function hideWavesIfNeeded() {
  // Obtén la altura del dispositivo en unidades vh
  const deviceHeight = window.innerHeight * 100 / document.documentElement.clientHeight;
  
  // Verifica si la altura del dispositivo es mayor a 662vh
  if (deviceHeight > 662) {
      // Oculta las ondas cambiando su visibilidad
      const waves = document.querySelectorAll('.wave');
      waves.forEach(wave => {
          wave.style.display = 'none';
      });
  }
}

// Llama a la función cuando la página esté completamente cargada
window.addEventListener('load', hideWavesIfNeeded);



// Ocultar flechas

document.addEventListener("DOMContentLoaded", function() {
  const arrowSection = document.querySelector(".arrow");
  const windowHeight = window.innerHeight;

  // Agrega un evento de desplazamiento a la ventana
  window.addEventListener("scroll", function() {
    // Verifica si el desplazamiento vertical supera la altura de la ventana
    if (window.scrollY > windowHeight) {
      // Si es así, oculta la sección de las flechas
      arrowSection.style.display = "none";
    } else {
      // Si el desplazamiento es menor a la altura de la ventana, muestra la sección de las flechas
      arrowSection.style.display = "block";
    }
  });
});


// Nav-Bar Hidden

const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScrollY = window.scrollY;
});

// Nav-Bar Media colors hidden
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

// Wave effect animation

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


// Counting 

// Función para verificar si un elemento está visible en la pantalla
// animacion "expert solutions"
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// aniamcion contadores
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function startCounterIfVisible() {
  let valueDisplay = document.querySelectorAll(".num");
  let interval = 1; // Ajusta este valor para cambiar la velocidad (por ejemplo, 2 para una animación más rápida)
  let increment = 1; // Ajusta este valor para cambiar el incremento (por ejemplo, 100 para incrementos de 100 en 100)

  valueDisplay.forEach((valueDisplay) => {
    if (isElementInViewport(valueDisplay) && !valueDisplay.classList.contains("animated")) {
      valueDisplay.classList.add("animated");

      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = interval / (endValue / increment); // Ajusta la duración en función del incremento y la velocidad
      let counter = setInterval(function () {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue; // Asegura que no supere el valor final
          clearInterval(counter);
        }
        let sign = "";
        if (valueDisplay.classList.contains("dollar")) {
          sign = "$ ";
        } else if (valueDisplay.classList.contains("plus")) {
          sign = "+ ";
        }
        
        let word ="";
        if (valueDisplay.classList.contains("hours")) {
          word = " Hours";
        } else if (valueDisplay.classList.contains("x")) {
          word = ".0 X";
        } else if (valueDisplay.classList.contains("days")) {
          word = " Days";
        }


        let formattedValue = formatNumberWithCommas(startValue);
        valueDisplay.textContent = sign + formattedValue + word;
      }, duration);


    }
  });
}
window.addEventListener("load", function() {
  startCounterIfVisible();
});

// Llamada a la función cuando se hace scroll
window.addEventListener("scroll", function() {
  startCounterIfVisible();
});

// Escuchador de evento de desplazamiento
window.addEventListener("scroll", startCounterIfVisible);

// Iniciar el contador cuando la página se carga por primera vez
startCounterIfVisible();

const neonSpan = document.querySelector(".neon");

// Función para verificar si un elemento está visible en la pantalla
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Función para agregar la clase "animate" cuando el elemento está en la vista
function animateIfVisible() {
    if (isElementInViewport(neonSpan)) {
        neonSpan.classList.add("animate");
    }
}

// Escuchador de evento de desplazamiento
window.addEventListener("scroll", animateIfVisible);

// Llamar a la función una vez cuando la página se carga por primera vez
animateIfVisible();

//CALENDARY INTEGRATION