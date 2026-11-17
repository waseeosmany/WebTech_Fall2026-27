const jobBox = document.getElementById("JobInfo");
const companyBox = document.getElementById("Company");
const sourceBox = document.getElementById("Source");
const amountRow = document.getElementById("amountRow");
const amountBox = document.getElementById("Amount");
const detailsBox = document.getElementById("Details");
const emailBox = document.getElementById("ReporterEmail");
const agree = document.getElementById("Condition");
const submitBtn = document.getElementById("submit");
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

function updateAmountRow() {
  if (getChoice("Paid") === "Yes") {
    amountRow.style.display = "block";
  } else {
    amountRow.style.display = "none";
    clearError(amountBox, "amountError");
  }
}

function validateForm() {
  let ok = true;

  if (jobBox.value.length < 3) {
    showError(jobBox, "jobError", "Please give the job link or title.");
    ok = false;
  } else {
    clearError(jobBox, "jobError");
  }

  if (companyBox.value.length < 2) {
    showError(companyBox, "companyError", "Please enter the company name.");
    ok = false;
  } else {
    clearError(companyBox, "companyError");
  }

  if (sourceBox.value === "Default") {
    showError(sourceBox, "sourceError", "Please choose where you saw it.");
    ok = false;
  } else {
    clearError(sourceBox, "sourceError");
  }

  const paid = getChoice("Paid");
  if (paid === "") {
    showError(null, "paidError", "Please choose one.");
    ok = false;
  } else {
    clearError(null, "paidError");
  }

  if (paid === "Yes" && isDigitsOnly(amountBox.value) === false) {
    showError(amountBox, "amountError", "Enter the amount in digits only.");
    ok = false;
  } else if (paid === "Yes" && amountBox.value.length === 0) {
    showError(amountBox, "amountError", "Enter the amount you paid.");
    ok = false;
  } else {
    clearError(amountBox, "amountError");
  }

  if (detailsBox.value.length < 10) {
    showError(detailsBox, "detailsError", "Please describe what happened (at least 10 characters).");
    ok = false;
  } else {
    clearError(detailsBox, "detailsError");
  }

  if (isValidEmail(emailBox.value) === false) {
    showError(emailBox, "emailError", "Please enter a valid email, like name@example.com.");
    ok = false;
  } else {
    clearError(emailBox, "emailError");
  }

  return ok;
}

function handleSubmit() {
  if (validateForm()) {
    console.log("Reported: " + companyBox.value + " / " + jobBox.value);
    result.innerHTML = "Thank you. Your report was received. Please do not send any more money or documents to this employer.";
    result.style.display = "block";
  } else {
    result.innerHTML = "";
    result.style.display = "none";
  }
}

function updateSubmit() {
  submitBtn.disabled = !agree.checked;
}

function handleReset() {
  clearError(jobBox, "jobError");
  clearError(companyBox, "companyError");
  clearError(sourceBox, "sourceError");
  clearError(null, "paidError");
  clearError(amountBox, "amountError");
  clearError(detailsBox, "detailsError");
  clearError(emailBox, "emailError");
  amountRow.style.display = "none";
  result.innerHTML = "";
  result.style.display = "none";
  submitBtn.disabled = true;
}

submitBtn.addEventListener("click", handleSubmit);
document.getElementById("reset").addEventListener("click", handleReset);
agree.addEventListener("change", updateSubmit);
document.getElementById("PaidYes").addEventListener("change", updateAmountRow);
document.getElementById("PaidNo").addEventListener("change", updateAmountRow);
