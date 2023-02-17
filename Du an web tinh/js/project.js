// about us

// ScrollReveal().reveal(".about-us", { distance: "200px" });
// ScrollReveal().reveal(".about-us", { origin: "left" });
// ScrollReveal().reveal(".about-us", { duration: 2000 });

// ScrollReveal().reveal(".about-us-img", { distance: "200px" });
// ScrollReveal().reveal(".about-us-img", { origin: "right" });
// ScrollReveal().reveal(".about-us-img", { duration: 2000 });

// ScrollReveal().reveal(".countdown-title", { distance: "200px" });
// ScrollReveal().reveal(".countdown-title", { origin: "left" });
// ScrollReveal().reveal(".countdown-title", { duration: 2000 });

// ScrollReveal().reveal(".list-item-countdown", { distance: "200px" });
// ScrollReveal().reveal(".list-item-countdown", { origin: "right" });
// ScrollReveal().reveal(".list-item-countdown", { duration: 2000 });

// ScrollReveal().reveal(".link-countdown", { distance: "200px" });
// ScrollReveal().reveal(".link-countdown", { duration: 2000 });

// // hair-style
// ScrollReveal().reveal(".hair-style", { distance: "500px" });
// ScrollReveal().reveal(".hair-style", { origin: "right" });
// ScrollReveal().reveal(".hair-style", { duration: 2000 });

// ScrollReveal().reveal(".service-price-img", { distance: "500px" });
// ScrollReveal().reveal(".service-price-img", { origin: "left" });
// ScrollReveal().reveal(".service-price-img", { duration: 2000 });

// $(".list-service").slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   autoplay: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//   ],
// });

// $(".brand").slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   autoplay: true,
//   slidesToShow: 5,
//   slidesToScroll: 5,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//   ],
// });

// ScrollReveal().reveal(".list-service", { distance: "500px" });
// ScrollReveal().reveal(".list-service", { origin: "left" });
// ScrollReveal().reveal(".list-service", { duration: 2000 });

// ScrollReveal().reveal(".link-hair-style", { distance: "500px" });
// ScrollReveal().reveal(".link-hair-style", { origin: "right" });
// ScrollReveal().reveal(".link-hair-style", { duration: 2000 });

// contact
function filterObjects(c) {
  let x, i;

  x = document.getElementsByClassName("box-contact");
  if (c == "all") {
    c = "";
  }

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    }
  }
}

function addClass(element, name) {
  let i, arr1, arr2;

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(" ");
}

ScrollReveal().reveal(".content-contact", { delay: 2000 });

// form
const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const inputs = [nameInput, emailInput, phoneInput, messageInput];

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) {
    return;
  }
  isFormValid = true;
  //   resetElm(nameInput);
  //   resetElm(emailInput);
  //   resetElm(phoneInput);
  inputs.forEach(resetElm);

  if (!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput);
  }

  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput);
  }

  if (!isValidPhone(phoneInput.value)) {
    isFormValid = false;
    invalidateElm(phoneInput);
  }

  if (!messageInput.value) {
    isFormValid = false;
    invalidateElm(messageInput);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
