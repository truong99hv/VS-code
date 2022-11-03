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

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let passwork = document.querySelector("#passwork");
let confirmPasswork = document.querySelector("#confirm-passwork");
let form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;

  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Sai cú pháp Email");
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} ký tự`);
    return true;
  }

  return false;
}

function checkMatchPassworkError(passworkInput, cfPassworkInput) {
  if (passworkInput.value !== cfPassworkInput.value) {
    showError(cfPassworkInput, "Mật khẩu không trùng khớp");

    return true;
  }

  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    passwork,
    confirmPasswork,
  ]);

  let isEmailError = checkEmailError(email);
  let isUsernameLengthError = checkLengthError(username, 3, 15);
  let isPassworkLengthError = checkLengthError(passwork, 3, 15);
  let isMatchPassworkError = checkMatchPassworkError(passwork, confirmPasswork);
});
