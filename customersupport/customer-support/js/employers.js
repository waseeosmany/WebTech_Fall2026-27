const packageBox = document.getElementById("Package");
const jobsBox = document.getElementById("Jobs");
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

function calculate() {
  let ok = true;

  if (packageBox.value === "Default") {
    showError(packageBox, "packageError", "Please choose a package.");
    ok = false;
  } else {
    clearError(packageBox, "packageError");
  }

  if (jobsBox.value < 1) {
    showError(jobsBox, "jobsError", "Enter 1 or more jobs.");
    ok = false;
  } else {
    clearError(jobsBox, "jobsError");
  }

  if (ok) {
    const price = packageBox.value;
    const jobs = jobsBox.value;
    let total = price * jobs;
    let message = "";

    if (jobs > 10) {
      total = total - total / 5;
      message = " (20% discount for more than 10 jobs)";
    } else if (jobs > 5) {
      total = total - total / 10;
      message = " (10% discount for more than 5 jobs)";
    }

    console.log("Total: " + total);
    result.innerHTML = "Estimated total: " + total + message;
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
}

document.getElementById("calcBtn").addEventListener("click", calculate);
