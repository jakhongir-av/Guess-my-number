import { $ } from "./utils.js";

const roundsEl = $(".currentRound");
const endGameMessageEl = $(".endGameMessage");
const newRoundEl = $(".newRound");
const secretNumEl = $(".secretNumber");
const guessNumInput = $(".guess");
const checkBtnEl = $(".check");
const messageEl = $(".message");
const scoreEl = $(".score");
const highScoreEl = $(".highscore");
const currentRoundEl = $(".currentRound");

class Game {
  constructor(secretNum, round, currentScore, highScore) {
    this.secretNum = secretNum;
    this.round = round;
    this.currentScore = currentScore;
    this.highScore = highScore;
  }

  check(guessedNumber) {
    const isWon = guessedNumber === this.secretNum ? "win" : "lose";
    switch (isWon) {
      case "win":
        document.body.style.backgroundColor = "green";
        secretNumEl.innerHTML = this.secretNum;
        newRoundEl.removeAttribute("disabled");
        messageEl.textContent = "You Won!!!";
        this.highScore =
          this.currentScore > this.highScore
            ? this.currentScore
            : this.highScore;
        checkBtnEl.setAttribute("disabled", "true");
        this.render();
        break;
      case "lose":
        if (this.currentScore > 1) {
          this.currentScore -= 1;
          document.body.style.backgroundColor = "red";
          messageEl.textContent =
            guessedNumber > this.secretNum ? "Too high" : "Too low";
          checkBtnEl.setAttribute("disabled", "true");
          setTimeout(() => {
            document.body.style.backgroundColor = "#222222";
            checkBtnEl.removeAttribute("disabled");
          }, 1000);
        } else {
          this.currentScore -= 1;
          checkBtnEl.setAttribute("disabled", "true");
          guessNumInput.setAttribute("disabled", "true");
          document.body.style.backgroundColor = "red";
          messageEl.textContent = "You Lose!!!";
          newRoundEl.textContent = "New Game";
          newRoundEl.removeAttribute("disabled");
        }
        guessNumInput.value = "";
        this.render();
        break;
    }
  }

  nextRound() {
    if (this.round <= 20) {
      this.round += 1;
      this.currentScore = 20;
      this.secretNum = Math.floor(Math.random() * 20) + 1;
      this.highScore = this.highScore;
      newRoundEl.setAttribute("disabled", "true");
      checkBtnEl.removeAttribute("disabled");
      document.body.style.backgroundColor = "#222222";
      secretNumEl.textContent = "?";
      guessNumInput.value = "";
      this.round == 20 ? (newRoundEl.textContent = "New Game") : null;
      this.render();
    } else {
      endGameMessageEl.textContent = "You Completely Won!!!";
    }
  }

  render() {
    scoreEl.textContent = this.currentScore;
    highScoreEl.textContent = this.highScore;
    currentRoundEl.textContent = this.round;
    roundsEl.textContent = this.round;
    localStorage.setItem(
      "guessNum",
      JSON.stringify({
        secretNum: this.secretNum,
        round: this.round,
        currentScore: this.currentScore,
        highScore: this.highScore,
      })
    );
  }

  newGame() {
    this.secretNum = Math.floor(Math.random() * 20) + 1;
    this.round = 1;
    this.currentScore = 20;
    this.highScore = 0;
    this.render();
  }
}

const { secretNum, round, currentScore, highScore } = JSON.parse(
  localStorage.getItem("guessNum")
) || {
  secretNum: Math.floor(Math.random() * 20) + 1,
  round: 1,
  currentScore: 20,
  highScore: 0,
};
const GameSettings = new Game(secretNum, round, currentScore, highScore);

GameSettings.render();

checkBtnEl.addEventListener("click", () => {
  if (guessNumInput.value && guessNumInput.value != 0) {
    GameSettings.check(Number(guessNumInput.value));
  } else {
    messageEl.textContent = "Enter between 1 and 20";
  }
});

newRoundEl.addEventListener("click", function () {
  if (this.textContent !== "New Game") {
    GameSettings.nextRound();
    console.log("Next Round");
  } else {
    GameSettings.newGame("Next Game");
  }
});
