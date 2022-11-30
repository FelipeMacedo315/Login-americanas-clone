let passwordVisible = false;

const inputPasswordIcon = document.getElementsByClassName("icon-input")[0];

const inputPasswordField = document.getElementById("password");

function validateData() {
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value;

  if (email.length === 0) {
    document.getElementsByTagName("small")[0].innerText = "E necessário informar um E-mail";
  } else {
    document.getElementsByTagName("small")[0].innerText = "";
  }

  if (password.length === 0) {
    document.getElementsByTagName("small")[1].innerText = "E necessário informar uma senha ";
  } else {
    document.getElementsByTagName("small")[1].innerText = "";
  }
}

function changeVisiblePassword(params) {
  passwordVisible = !passwordVisible;
  if (passwordVisible == true) {
    inputPasswordField.type = "text";
    inputPasswordIcon.src = "./assets/images/icons8-visible-64.png";
  } else {
    inputPasswordField.type = "password";
    inputPasswordIcon.src = "./assets/images/icons8-eye-64.png";
  }
}
