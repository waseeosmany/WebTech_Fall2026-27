const aboutBox = document.getElementById("About");
const commentsBox = document.getElementById("Comments");
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

function getChoice(groupName) {
  const group = document.getElementsByName(groupName);
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked) {
      return group[i].value;
    }
  }
  return "";
}

function handleSubmit() {
  let ok = true;
  const rating = getChoice("Rating");

  if (rating === "") {
    showError(null, "ratingError", "Please choose a rating.");
    ok = false;
  } else {
    clearError(null, "ratingError");
  }

  if (aboutBox.value === "Default") {
    showError(aboutBox, "aboutError", "Please choose a topic.");
    ok = false;
  } else {
    clearError(aboutBox, "aboutError");
  }

  if (ok) {
    console.log("Rating: " + rating + " about " + aboutBox.value);
    console.log("Comments: " + commentsBox.value);

    if (rating >= 4) {
      result.innerHTML = "Thank you. We are glad you had a good experience!";
    } else if (rating === "3") {
      result.innerHTML = "Thank you. We will try to make it better.";
    } else {
      result.innerHTML = "Thank you, and sorry we let you down. We will work on it.";
    }
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
}

function handleReset() {
  clearError(null, "ratingError");
  clearError(aboutBox, "aboutError");
  result.innerHTML = "";
  result.style.display = "none";
}

document.getElementById("submit").addEventListener("click", handleSubmit);
document.getElementById("reset").addEventListener("click", handleReset);
