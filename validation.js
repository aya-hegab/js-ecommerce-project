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

function clearMsgs() {
  for (var i = 0; i < allMsgs.length; i++) {
    allMsgs[i].innerHTML = "";
  }
  fullnameIn.classList.remove("error");
  emailIn.classList.remove("error");
  phoneIn.classList.remove("error");
}

function check() {
  clearMsgs();
  if (fullnameIn.value == "") {
    fullnameMsg.innerHTML = "name is required";
    fullnameIn.classList.add("error");
    return -1;
  }
  if (emailIn.value == "") {
    emailMsg.innerHTML = "email is required";
    emailIn.classList.add("error");
    return -1;
  } else if (regGmail.test(emailIn.value) == false) {
    emailMsg.innerHTML = "Email is not valid";
    emailIn.classList.add("error");
    return -1;
  }

  if (passIn.value == "") {
    passMsg.innerHTML = "phone number is required";
    passIn.classList.add("error");
    return -1;
  } else if (passIn.value.length < 8) {
    phoneMsg.innerHTML = "Password must be 8 chars at least";
    phoneIn.classList.add("error");
    return -1;
  }
}

conactusBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (check() != -1) {
    alert("thank you! a link was sent to ur email account");
    fullnameIn.value = "";
    emailIn.value = "";
    phoneIn.value = "";
  }
});
