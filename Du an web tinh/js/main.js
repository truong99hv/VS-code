// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ===Banner===
ScrollReveal().reveal(".banner", { delay: 400 });
ScrollReveal().reveal(".banner", { duration: 4000 });
ScrollReveal().reveal(".banner", { opacity: 0.8 });
ScrollReveal().reveal(".banner", { easing: "ease-in" });

// about us

ScrollReveal().reveal(".about-us", { distance: "200px" });
ScrollReveal().reveal(".about-us", { origin: "left" });
ScrollReveal().reveal(".about-us", { duration: 2000 });

ScrollReveal().reveal(".about-us-img", { distance: "200px" });
ScrollReveal().reveal(".about-us-img", { origin: "right" });
ScrollReveal().reveal(".about-us-img", { duration: 2000 });

// countdown
let fuT = new Date("nov 11, 2022 00:00:00").getTime();

setInterval(function () {
  let noW = new Date().getTime();
  let D = fuT - noW;
  let days = Math.floor(D / (1000 * 60 * 60 * 24));
  let hours = Math.floor(D / (1000 * 60 * 60));
  let minutes = Math.floor(D / (1000 * 60));
  let seconds = Math.floor(D / 1000);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
});

ScrollReveal().reveal(".countdown-title", { distance: "200px" });
ScrollReveal().reveal(".countdown-title", { origin: "left" });
ScrollReveal().reveal(".countdown-title", { duration: 2000 });

ScrollReveal().reveal(".list-item-countdown", { distance: "200px" });
ScrollReveal().reveal(".list-item-countdown", { origin: "right" });
ScrollReveal().reveal(".list-item-countdown", { duration: 2000 });

ScrollReveal().reveal(".link-countdown", { distance: "200px" });
ScrollReveal().reveal(".link-countdown", { duration: 2000 });

// hair-style
ScrollReveal().reveal(".hair-style", { distance: "500px" });
ScrollReveal().reveal(".hair-style", { origin: "right" });
ScrollReveal().reveal(".hair-style", { duration: 2000 });

ScrollReveal().reveal(".service-price-img", { distance: "500px" });
ScrollReveal().reveal(".service-price-img", { origin: "left" });
ScrollReveal().reveal(".service-price-img", { duration: 2000 });

$(".list-service").slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".brand").slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

ScrollReveal().reveal(".list-service", { distance: "500px" });
ScrollReveal().reveal(".list-service", { origin: "left" });
ScrollReveal().reveal(".list-service", { duration: 2000 });

ScrollReveal().reveal(".link-hair-style", { distance: "500px" });
ScrollReveal().reveal(".link-hair-style", { origin: "right" });
ScrollReveal().reveal(".link-hair-style", { duration: 2000 });
