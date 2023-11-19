"use strict";

// Variables:

let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
let firstPlayer = document.querySelector(".player--0");
let secondPlayer = document.querySelector(".player--1");
let diceEl = document.querySelector(".dice");
let btnRoll = document.querySelector(".btn--roll");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let currentScore0 = document.querySelector("#current--0");
let currentScore1 = document.querySelector("#current--1");

// Start conditions :
let currentScore;
let activePlayer;
let score;
let playing;

// useful functions

const initGame = () => {
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score = [0, 0];
  playing = true;
  document.querySelector(`#name--0`).textContent = `PLAYER 1`;
  document.querySelector(`#name--1`).textContent = `PLAYER 2`;
  document.querySelector(`#name--0`).style.color = "#000";
  document.querySelector(`#name--1`).style.color = "#000";
  document.querySelector(".dice").classList.remove("hidden");
  firstPlayer.classList.remove("player--winner");
  secondPlayer.classList.remove("player--winner");
};
initGame();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  firstPlayer.classList.toggle("player--active");
  secondPlayer.classList.toggle("player--active");
};

// Roll Dice

const rollDice = () => {
  if (playing) {
    let dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".dice").src = `images/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

// Hold Score

const holdScore = () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document.querySelector(`#name--${activePlayer}`).textContent = "WINNER!";
      document.querySelector(`#name--${activePlayer}`).style.color = "#008170";
      document.querySelector(".dice").classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
};

btnNew.addEventListener("click", initGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
