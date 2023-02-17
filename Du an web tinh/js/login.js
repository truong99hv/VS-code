// ScrollReveal().reveal(".list-service", { distance: "500px" });
// ScrollReveal().reveal(".list-service", { origin: "left" });
// ScrollReveal().reveal(".list-service", { duration: 2000 });

// ScrollReveal().reveal(".link-hair-style", { distance: "500px" });
// ScrollReveal().reveal(".link-hair-style", { origin: "right" });
// ScrollReveal().reveal(".link-hair-style", { duration: 2000 });

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
  let isUsernameLengthError = checkLengthError(username, 6, 15);
  let isPassworkLengthError = checkLengthError(passwork, 6, 15);
  let isMatchPassworkError = checkMatchPassworkError(passwork, confirmPasswork);
});
