const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const password2 = document.getElementById("Password2");

// ? show input error message
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// ? showsuccess outline
const showSuccess = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// ? check email is valid
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input)) {
    showSuccess(input.value.trim());
  } else {
    showError(input, "Email is not valid");
  }
};

// ?check required fields
const checkRequired = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)}is required`);
    } else {
      showSuccess(input);
    }
  });
};
// ? check input
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else showSuccess;
};

// ? check passwords match
const checkPasswordMatch = function (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "password do not match");
  }
};
// ? get field name
const getFieldName = function (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// ? event listners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);

  checkLength(userName, 4, 16);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);

  // if (userName.value === "") {
  //   showError(userName, "username is required");
  // } else {
  //   showSuccess(userName);
  // }
  // if (email.value === "") {
  //   showError(email, "email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "enter valid email");
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === "") {
  //   showError(password2, "Password is required");
  // } else {
  //   showSuccess(password2);
  // }
});
