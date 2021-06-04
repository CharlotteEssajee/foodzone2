// contact form
const fullContactForm = document.querySelector(".contact");
const form = document.querySelector("#contactForm");
const fullname = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
  event.preventDefault();

  let form = true;

  if (checkLength(fullname.value, 4) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    form = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    form = false;
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    form = false;
  }

  if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    form = false;
  }

  if (form === true) {
    fullContactForm.innerHTML = `<div class="messageSuccess">
                                  <i class="far fa-check-circle"></i>
                                  <p class="success">Thank you!</p>
                                  <p>Your message has been sent</p>
                                </div>`;
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
