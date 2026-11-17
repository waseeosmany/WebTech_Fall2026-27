const searchBox = document.getElementById("search");
const countText = document.getElementById("count");
const totalCards = 9;

function filterCards() {
  const term = searchBox.value.toLowerCase();
  let shown = 0;

  for (let i = 1; i <= totalCards; i++) {
    const card = document.getElementById("card" + i);
    if (card.innerHTML.toLowerCase().indexOf(term) >= 0) {
      card.style.display = "block";
      shown++;
    } else {
      card.style.display = "none";
    }
  }

  if (shown === 0) {
    countText.innerHTML = "No topics found. Try another word, or send us a request.";
  } else {
    countText.innerHTML = shown + " of " + totalCards + " topics shown";
  }
}

searchBox.addEventListener("keyup", filterCards);
