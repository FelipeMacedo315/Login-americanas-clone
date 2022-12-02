let passwordVisible = false;

const inputPasswordIcon = document.getElementById("icon-password");

const inputPasswordField = document.getElementById("password");

function validateData() {
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value;
  var inputFieldEmail = document.getElementsByTagName("input")[0];
  var inputFieldPassword = document.getElementsByTagName("input")[1];
  if (email.length === 0) {
    inputFieldEmail.className = "input-error";
    document.getElementsByTagName("small")[0].innerText = "E necessário informar um E-mail";
  } else if (!email.includes("@") || !email.includes(".com")) {
    inputFieldEmail.className = "input-error";
    document.getElementsByTagName("small")[0].innerText = "informe um email valido";
  } else {
    inputFieldEmail.className = "input-ok";
    document.getElementsByTagName("small")[0].innerText = "";
  }

  if (password.length === 0) {
    inputFieldPassword.className = "input-error";
    document.getElementsByTagName("small")[1].innerText = "E necessário informar uma senha ";
    inputPasswordIcon.className = "icon-input-error";
  } else {
    document.getElementsByTagName("small")[1].innerText = "";
    inputPasswordIcon.className = "icon-input-ok";
    inputFieldPassword.className = "input-ok";
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
