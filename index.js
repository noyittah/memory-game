var input = '';
var numOfCards = 0;
var chosenCards;

//get the input data from the player and build game
function getInput() {
    input = document.getElementById("playerInput").value;
    numOfCards = input.length;
    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + input;
    document.getElementById("playerInput").value= "";
    var cardsPads = document.getElementById("cardspad");

    for(let i = 0; i < numOfCards; i++) {
        let card = document.createElement("button");
        card.classList.add("card");
        card.id = i;
        card.innerText = "*";
        cardsPads.appendChild(card);
    }
    var objs = document.querySelectorAll(`.card`);
    objs.forEach((obj) => {
        obj.addEventListener("click", (e) => {exposeCard(e)});
    });
}

//expose the cards when clicked
function exposeCard(event) {
    var cardId = event.target.id;
    var cardVal = input[cardId];
    event.target.innerText = cardVal;
    chosenCards += cardVal;

    if(chosenCards !== input.substring(0,chosenCards.length)) {
        hiddenCards();
    }else if(chosenCards === input) {
        endGame();
    }
}

//hidden the cards if the values not fits
function hiddenCards() {
    var cards = document.querySelectorAll(".card");
    chosenCards="";
    cards.forEach(card => {
        card.innerText = "*"
    });
}

function endGame(){
    document.getElementById("status").innerText = "WOW!YOU WIN!";
}

function main() {
    document.querySelector("button").addEventListener("click", getInput);
}

main();


