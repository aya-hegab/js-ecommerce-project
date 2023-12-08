var conactusBtn = document.querySelector("form button");
var fullnameIn = document.getElementById("fullname");
var emailIn = document.getElementById("email");
var passIn = document.getElementById("pass");
var fullnameMsg = document.getElementById("fullnamemsg");
var emailMsg = document.getElementById("emailmsg");
var passMsg = document.getElementById("passmsg");
var regGmail = /[a-z0-9]+@gmail.com/;
// var regNum = /^(010|011|012)/;
var allMsgs = document.getElementsByClassName("msg");
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

function clearMsgs() {
  for (var i = 0; i < allMsgs.length; i++) {
    allMsgs[i].innerHTML = "";
  }
  fullnameIn.classList.remove("error");
  emailIn.classList.remove("error");
  passIn.classList.remove("error");
}

function clearFields() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

conactusBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearMsgs();
  if (fullnameIn.value == "") {
    fullnameMsg.innerHTML = "name is required";
    fullnameIn.classList.add("error");
    flag1 = 0;
  } else {
    flag1 = 1;
  }
  if (emailIn.value == "") {
    emailMsg.innerHTML = "email is required";
    emailIn.classList.add("error");
    flag2 = 0;
  } else if (regGmail.test(emailIn.value) == false) {
    emailMsg.innerHTML = "Email is not valid";
    emailIn.classList.add("error");
    flag2 = 0;
  } else {
    flag2 = 1;
  }

  if (passIn.value == "") {
    passMsg.innerHTML = "password is required";
    passIn.classList.add("error");
    flag3 = 0;
  } else if (passIn.value.length < 8) {
    passMsg.innerHTML = "Password must be 8 chars at least";
    passIn.classList.add("error");
    flag3 = 0;
  } else {
    flag3 = 1;
  }
  if (flag1 == 1 && flag2 == 1 && flag3 == 1) {
    alert("a message with a link was sent to your email");
    clearMsgs();
    clearFields();
  }
});
