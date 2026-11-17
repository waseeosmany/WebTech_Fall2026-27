const emailBox = document.getElementById("ResetEmail");
const result = document.getElementById("result");

function showError(box, errorId, message) {
  const errorBox = document.getElementById(errorId);
  errorBox.innerHTML = message;
  errorBox.style.display = "inline-block";
  if (box !== null) {
    box.style.border = "1px solid #BE123C";
  }
}

function clearError(box, errorId) {
  const errorBox = document.getElementById(errorId);
  errorBox.innerHTML = "";
  errorBox.style.display = "none";
  if (box !== null) {
    box.style.border = "";
  }
}

function isValidEmail(email) {
  const at = email.indexOf("@");
  const domain = email.slice(at + 1);
  if (at < 1 || domain.indexOf(".") < 1) {
    return false;
  }
  return true;
}

function handleSendLink() {
  if (isValidEmail(emailBox.value)) {
    clearError(emailBox, "emailError");
    result.innerHTML = "If an account exists for " + emailBox.value + ", a reset link has been sent.";
    result.style.display = "block";
  } else {
    showError(emailBox, "emailError", "Please enter a valid email, like name@example.com.");
    result.style.display = "none";
  }
}

document.getElementById("sendLink").addEventListener("click", handleSendLink);
