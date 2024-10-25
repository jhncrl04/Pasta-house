const email = document.getElementById("user-email");
const otpCode = document.getElementById("code-input");
const newPassword = document.getElementById("user-password");

function newPassAlert() {
  if (email.value !== "" && otpCode.value !== "" && newPassword !== "") {
    email.value = "";
    otpCode.value = "";
    newPassword.value = "";

    alert(
      "New Password has been set.\nYou may now log in using your new password."
    );
  } else {
    alert("Please complete all the required field to reset your password!");
  }
}

function sendCodeAlert() {
  if (email.value !== "") {
    alert("A code has been send to your email.");
  } else {
    alert("Please fill in your email to send a code.");
  }
}
