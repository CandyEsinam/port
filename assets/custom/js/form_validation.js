let user_name = document.getElementById("name");
let user_mail = document.getElementById("mail");
let user_msg = document.getElementById("msg");

function validation() {
  if (user_name.value == "") {
    document.getElementById("name-error").innerHTML = "This field is recquired";
    user_name.style.border = "1px solid red";
  } else {
    user_name.style.border = "1px solid green";
  }

  if (user_msg.value == "") {
    document.getElementById("msg-error").innerHTML = "This field is recquired";
    user_msg.style.border = "1px solid red";
  } else {
    user_msg.style.border = "1px solid green";
  }

  if (user_mail.value == "") {
    document.getElementById("mail-error").innerHTML =
      "Please use a valid email address";
    user_mail.style.border = "1px solid red";
  } else if (
    user_mail.value.includes("@") &&
    user_mail.value.endsWith(".com")
  ) {
    user_mail.style.border = "1px solid green";
  } else {
    document.getElementById("mail-error").innerHTML =
      "Please use a valid email address";
    user_mail.style.border = "1px solid red";
  }
}

function clearField() {
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("mail-error").innerHTML = "";
  document.getElementById("msg-error").innerHTML = "";
}
