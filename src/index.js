const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  let clickedCards = [];

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      let cardWithImage = card.querySelector(".front");
      if (clickedCards.length === 0 || clickedCards.length === 1) {
        cardWithImage.classList.toggle("flipped");

        let cardName = card.getAttribute("data-card-name");
        //console.log(`Card clicked: ${cardName}`);
        clickedCards.push(cardName);
        //console.log(clickedCards);
      }

      if (clickedCards.length === 2) {
        if (memoryGame.checkIfPair(clickedCards[0], clickedCards[1])) {
          //keep them open
          document.querySelectorAll(".flipped").forEach((flippedCard) => {
            flippedCard.classList.remove("flipped");
            flippedCard.style.transform = "none";
            clickedCards = [];
          });
        }
        
        if (!memoryGame.checkIfPair(clickedCards[0], clickedCards[1])) {
          //close them
          setTimeout(() => {
            document.querySelectorAll(".flipped").forEach((flippedCard) => {
              flippedCard.classList.remove("flipped");
            });
            clickedCards = [];
          }, 2000);
        }

        if (memoryGame.checkIfFinished()) {
          console.log("You've won!!");
        }
      }
    });
  });
});
