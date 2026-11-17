const nameBox = document.getElementById("CName");
const emailBox = document.getElementById("CEmail");
const deptBox = document.getElementById("Dept");
const messageBox = document.getElementById("Message");
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

function validateForm() {
  let ok = true;

  if (nameBox.value.length < 2) {
    showError(nameBox, "nameError", "Please enter your name.");
    ok = false;
  } else {
    clearError(nameBox, "nameError");
  }

  if (isValidEmail(emailBox.value) === false) {
    showError(emailBox, "emailError", "Please enter a valid email, like name@example.com.");
    ok = false;
  } else {
    clearError(emailBox, "emailError");
  }

  if (deptBox.value === "Default") {
    showError(deptBox, "deptError", "Please choose a department.");
    ok = false;
  } else {
    clearError(deptBox, "deptError");
  }

  if (messageBox.value.length < 10) {
    showError(messageBox, "messageError", "Please write at least 10 characters.");
    ok = false;
  } else {
    clearError(messageBox, "messageError");
  }

  return ok;
}

function handleSend() {
  if (validateForm()) {
    console.log("From: " + nameBox.value + " (" + emailBox.value + ")");
    console.log("Department: " + deptBox.value);
    console.log("Message: " + messageBox.value);
    result.innerHTML = "Thank you, " + nameBox.value + ". Your message was sent to " + deptBox.value + ".";
    result.style.display = "block";
  } else {
    result.innerHTML = "";
    result.style.display = "none";
  }
}

function handleReset() {
  clearError(nameBox, "nameError");
  clearError(emailBox, "emailError");
  clearError(deptBox, "deptError");
  clearError(messageBox, "messageError");
  result.innerHTML = "";
  result.style.display = "none";
}

document.getElementById("send").addEventListener("click", handleSend);
document.getElementById("reset").addEventListener("click", handleReset);
