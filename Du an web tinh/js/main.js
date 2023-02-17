// about us

ScrollReveal().reveal(".about-us", { distance: "200px" });
ScrollReveal().reveal(".about-us", { origin: "left" });
ScrollReveal().reveal(".about-us", { duration: 2000 });

ScrollReveal().reveal(".about-us-img", { distance: "200px" });
ScrollReveal().reveal(".about-us-img", { origin: "right" });
ScrollReveal().reveal(".about-us-img", { duration: 2000 });

// countdown
let fuT = new Date("mar 1, 2023 00:00:00").getTime();

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

ScrollReveal().reveal(".list-service", { distance: "500px" });
ScrollReveal().reveal(".list-service", { origin: "left" });
ScrollReveal().reveal(".list-service", { duration: 2000 });

ScrollReveal().reveal(".link-hair-style", { distance: "500px" });
ScrollReveal().reveal(".link-hair-style", { origin: "right" });
ScrollReveal().reveal(".link-hair-style", { duration: 2000 });
