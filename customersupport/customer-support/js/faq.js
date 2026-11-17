const totalQuestions = 8;

function toggleAnswer(num) {
  const question = document.getElementById("q" + num);
  const answer = document.getElementById("a" + num);

  if (answer.style.display === "block") {
    answer.style.display = "none";
    question.style.backgroundColor = "";
  } else {
    answer.style.display = "block";
    question.style.backgroundColor = "#E0F2FE";
  }
}

function showGroup(which) {
  const seeker = document.getElementById("seekerFaq");
  const employer = document.getElementById("employerFaq");
  const tabAll = document.getElementById("tabAll");
  const tabSeeker = document.getElementById("tabSeeker");
  const tabEmployer = document.getElementById("tabEmployer");
  tabAll.style.backgroundColor = "";
  tabSeeker.style.backgroundColor = "";
  tabEmployer.style.backgroundColor = "";
  tabAll.style.color = "";
  tabSeeker.style.color = "";
  tabEmployer.style.color = "";

  if (which === "seeker") {
    seeker.style.display = "block";
    employer.style.display = "none";
    tabSeeker.style.backgroundColor = "#DBEAFE";
    tabSeeker.style.color = "#1D4ED8";
  } else if (which === "employer") {
    seeker.style.display = "none";
    employer.style.display = "block";
    tabEmployer.style.backgroundColor = "#DBEAFE";
    tabEmployer.style.color = "#1D4ED8";
  } else {
    seeker.style.display = "block";
    employer.style.display = "block";
    tabAll.style.backgroundColor = "#DBEAFE";
    tabAll.style.color = "#1D4ED8";
  }
}

for (let i = 1; i <= totalQuestions; i++) {
  document.getElementById("q" + i).addEventListener("click", () => toggleAnswer(i));
}

document.getElementById("tabAll").addEventListener("click", () => showGroup("all"));
document.getElementById("tabSeeker").addEventListener("click", () => showGroup("seeker"));
document.getElementById("tabEmployer").addEventListener("click", () => showGroup("employer"));
showGroup("all");
