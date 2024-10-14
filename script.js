
// let elem_preloader = document.getElementById("preloader");
// let body = document.getElementById("body");

// body.classList.add('no-scroll');

//   setTimeout(function() {
//     elem_preloader.classList.remove("preloader");
//     body.classList.remove("no-scroll");
//   }, 5280);

document.getElementById('vid').play();

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorOutline.style.left = `${posX}px`
  cursorOutline.style.top = `${posY}px`

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
})


window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

const header = document.querySelector('header.header')

window.addEventListener('scroll', () => {
  const alturaScrollY = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (alturaScrollY < 350) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  } else {
    if (alturaScrollY < 150) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  }
});

// Defina a data final da contagem regressiva
const targetDate = new Date("2024-12-31T23:59:59").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Calcule o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Exiba os valores no HTML
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Se a contagem regressiva terminar, exiba uma mensagem
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }
};
// Atualize a contagem regressiva a cada segundo
const interval = setInterval(countdown, 1000);


// smoothscroll
// const body = document.body,
// scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
// height = scrollWrap.getBoundingClientRect().height - 1,
// speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
// offset += (window.pageYOffset - offset) * speed;

// var scroll = "translateY(-" + offset + "px) translateZ(0)";
// scrollWrap.style.transform = scroll;

// callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();