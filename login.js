const username = document.getElementById("user-username");
const password = document.getElementById("user-password");
const email = document.getElementById("user-email");

const showPassBtn = document.getElementById("show-pass-btn");

function verifyAcc() {
  if (
    username.value.toLowerCase() === "jhncrl" &&
    password.value === "johncarlo"
  ) {
    window.location.href = "homepage.html";
    console.log("hello world");
  } else {
    alert("Invalid username or password!\nPlease try again.");
  }
}

function showPass() {
  if (password.classList.contains("hidden")) {
    password.type = "text";
    password.classList.remove("hidden");
    showPassBtn.innerHTML = "Hide";
  } else {
    password.type = "password";
    password.classList.add("hidden");
    showPassBtn.innerHTML = "Show";
  }
}

function signUpAlert() {
  if (email.value !== "" || username.value !== "" || password.value !== "") {
    alert("Account sign up successful\nYou may now log in.");
  } else {
    alert("Account sign up failed\nPlease fill in all required feild");
  }
}
