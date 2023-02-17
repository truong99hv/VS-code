let currentDateTime = new Date();
let year = currentDateTime.getFullYear();
let month = currentDateTime.getMonth() + 1;
let date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

let dateTomorrow = year + "-" + month + "-" + date;
let checkinElem = document.querySelector("#checkin-date");

checkinElem.setAttribute("min", dateTomorrow);

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
const dateInput = document.querySelector("input[name='checkin']");
const selectSalon = document.querySelector("#salon-booking");
const selectTime = document.querySelector("#time-booking");

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const inputs = [
  nameInput,
  emailInput,
  phoneInput,
  checkinElem,
  dateInput,
  selectSalon,
  selectTime,
];

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) {
    return;
  }
  isFormValid = true;

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

  if (!dateInput.value) {
    isFormValid = false;
    invalidateElm(dateInput);
  }

  if (!checkinElem.value) {
    isFormValid = false;
    invalidateElm(checkinElem);
  }

  if (!selectSalon.value) {
    isFormValid = false;
    invalidateElm(selectSalon);
  }

  if (!selectTime.value) {
    isFormValid = false;
    invalidateElm(selectTime);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden");
    thankYou.innerHTML += ` <div class="table-booking">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="text-start">STT</th>
                      <th scope="col" class="text-start">Thông Tin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-start col-6">1. Họ Tên</td>
                      <td class="text-start col-6">${nameInput.value}</td>
                    </tr>
                    <tr>
                      <td class="text-start col-6">2. Email</td>
                      <td class="text-start col-6">${emailInput.value}</td>
                    </tr>

                    <tr>
                      <td class="text-start col-6">3. Số điện thoại</td>
                      <td class="text-start col-6">${phoneInput.value}</td>
                    </tr>

                    <tr>
                      <td class="text-start col-6">4. Ngày đặt lịch</td>
                      <td class="text-start col-6">${dateInput.value}</td>
                    </tr>

                    <tr>
                      <td class="text-start col-6">5. Salon</td>
                      <td class="text-start col-6">${selectSalon.value}</td>
                    </tr>

                    <tr>
                      <td class="text-start col-6">6. Thời gian</td>
                      <td class="text-start col-6">${selectTime.value}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="link-back-home">
                <a href="index.html">Quay về trang chủ</a>
              </div>`;
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
