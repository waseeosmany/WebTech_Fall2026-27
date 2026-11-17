const refBox = document.getElementById("RefNumber");
const refError = document.getElementById("refError");
const resultPanel = document.getElementById("resultPanel");
const resSubject = document.getElementById("resSubject");
const resStatus = document.getElementById("resStatus");
const resNote = document.getElementById("resNote");

function showResult(subject, status, note) {
  resSubject.innerHTML = subject;
  resStatus.innerHTML = status;
  resNote.innerHTML = note;
  resultPanel.style.display = "block";

  if (status === "Resolved") {
    resStatus.style.backgroundColor = "#DCFCE7";
    resStatus.style.color = "#15803D";
  } else if (status === "In progress") {
    resStatus.style.backgroundColor = "#DBEAFE";
    resStatus.style.color = "#1D4ED8";
  } else {
    resStatus.style.backgroundColor = "#E5E7EB";
    resStatus.style.color = "#374151";
  }
}

function handleTrack() {
  const ref = refBox.value.toLowerCase();
  refError.style.display = "none";
  refBox.style.border = "";

  if (ref === "sup-1001") {
    showResult("Cannot upload my CV", "Pending", "We received your request. An agent will review it soon.");
  } else if (ref === "sup-1002") {
    showResult("Job posting not visible", "In progress", "An agent is looking into your posting right now.");
  } else if (ref === "sup-1003") {
    showResult("Forgot my password", "Resolved", "A reset link was sent to your email. This request is closed.");
  } else {
    resultPanel.style.display = "none";
    refError.innerHTML = "No request found with that number. Check it and try again.";
    refError.style.display = "inline-block";
    refBox.style.border = "1px solid #BE123C";
  }
  console.log("Tracked: " + refBox.value);
}

document.getElementById("trackBtn").addEventListener("click", handleTrack);
