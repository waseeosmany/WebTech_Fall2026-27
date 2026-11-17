const nameBox = document.getElementById("CustomerName");
const phoneBox = document.getElementById("ContactNumber");
const emailBox = document.getElementById("EmailAddress");
const categoryBox = document.getElementById("Category");
const priorityBox = document.getElementById("Priority");
const subjectBox = document.getElementById("Subject");
const problemBox = document.getElementById("Problem");
const counter = document.getElementById("counter");
const agree = document.getElementById("Condition");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

const maxLength = 300;

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

function isDigitsOnly(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + 1) < "0" || text.slice(i, i + 1) > "9") {
      return false;
    }
  }
  return true;
}

function isValidEmail(email) {
  const at = email.indexOf("@");
  const domain = email.slice(at + 1);
  if (at < 1 || domain.indexOf(".") < 1) {
    return false;
  }
  return true;
}

function getChoice(groupName) {
  const group = document.getElementsByName(groupName);
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked) {
      return group[i].value;
    }
  }
  return "";
}

function validateForm() {
  let ok = true;
  if (nameBox.value.length < 2) {
    showError(nameBox, "nameError", "Please enter your name.");
    ok = false;
  } else {
    clearError(nameBox, "nameError");
  }
  let phone = phoneBox.value;
  if (phone.slice(0, 1) === "+") {
    phone = phone.slice(1);
  }
  if (phone.length < 7 || phone.length > 15 || isDigitsOnly(phone) === false) {
    showError(phoneBox, "phoneError", "Enter 7 to 15 digits, for example 01712345678.");
    ok = false;
  } else {
    clearError(phoneBox, "phoneError");
  }
  if (isValidEmail(emailBox.value) === false) {
    showError(emailBox, "emailError", "Please enter a valid email, like name@example.com.");
    ok = false;
  } else {
    clearError(emailBox, "emailError");
  }
  if (getChoice("UserType") === "") {
    showError(null, "userTypeError", "Please choose one.");
    ok = false;
  } else {
    clearError(null, "userTypeError");
  }
  if (categoryBox.value === "Default") {
    showError(categoryBox, "categoryError", "Please choose a category.");
    ok = false;
  } else {
    clearError(categoryBox, "categoryError");
  }
  if (subjectBox.value.length < 3) {
    showError(subjectBox, "subjectError", "Please enter a short subject.");
    ok = false;
  } else {
    clearError(subjectBox, "subjectError");
  }
  const problem = problemBox.value;
  if (problem.length < 10) {
    showError(problemBox, "problemError", "Please describe your problem (at least 10 characters).");
    ok = false;
  } else if (problem.length > maxLength) {
    showError(problemBox, "problemError", "Please keep it under " + maxLength + " characters.");
    ok = false;
  } else {
    clearError(problemBox, "problemError");
  }
  if (getChoice("ContactPref") === "") {
    showError(null, "prefError", "Please choose one.");
    ok = false;
  } else {
    clearError(null, "prefError");
  }

  return ok;
}

function handleSubmit() {
  if (validateForm()) {
    console.log("Name: " + nameBox.value);
    console.log("Contact: " + phoneBox.value);
    console.log("Email: " + emailBox.value);
    console.log("I am a: " + getChoice("UserType"));
    console.log("Category: " + categoryBox.value);
    console.log("Priority: " + priorityBox.value);
    console.log("Subject: " + subjectBox.value);
    console.log("Problem: " + problemBox.value);

    result.innerHTML = "Thank you, " + nameBox.value + ". Your request about \"" + categoryBox.value +
      "\" has been received. We will contact you by " + getChoice("ContactPref") + ".";
    result.style.display = "block";
    alert("Your support request has been submitted.");
  } else {
    result.innerHTML = "";
    result.style.display = "none";
  }
}

function updateCounter() {
  const left = maxLength - problemBox.value.length;
  counter.innerHTML = left + " characters left";
  if (left < 0) {
    counter.style.color = "#BE123C";
  } else {
    counter.style.color = "#6B7280";
  }
}

function updateSubmit() {
  submitBtn.disabled = !agree.checked;
}

function handleReset() {
  clearError(nameBox, "nameError");
  clearError(phoneBox, "phoneError");
  clearError(emailBox, "emailError");
  clearError(null, "userTypeError");
  clearError(categoryBox, "categoryError");
  clearError(subjectBox, "subjectError");
  clearError(problemBox, "problemError");
  clearError(null, "prefError");
  counter.innerHTML = maxLength + " characters left";
  counter.style.color = "#6B7280";
  result.innerHTML = "";
  result.style.display = "none";
  submitBtn.disabled = true;
}

submitBtn.addEventListener("click", handleSubmit);
document.getElementById("reset").addEventListener("click", handleReset);
problemBox.addEventListener("keyup", updateCounter);
agree.addEventListener("change", updateSubmit);
