let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let resultHome = 0;
let resultGuest = 0;

let newGame = document.getElementById("new-game-btn");

function plus1_home() {
    resultHome += 1;
    scoreHome.textContent = resultHome; 
}

function plus2_home() {
   resultHome += 2;
    scoreHome.textContent = resultHome; 
}

function plus3_home() {
   resultHome += 3;
    scoreHome.textContent = resultHome; 
}

function plus1_guest() {
    resultGuest += 1;
    scoreGuest.textContent = resultGuest; 
}

function plus2_guest() {
   resultGuest += 2;
    scoreGuest.textContent = resultGuest; 
}

function plus3_guest() {
   resultGuest += 3;
    scoreGuest.textContent = resultGuest; 
}

//reset score button
function resetGame() {
    resultGuest = 0;
    scoreGuest.textContent = resultGuest;
    resultHome = 0;
    scoreHome.textContent = resultHome;
}
