const val = document.querySelector(".guess");
const btn = document.querySelector(".check");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const body = document.querySelector(".body");


const secretNum = Math.trunc(Math.random() * 20);
let currentScore = 20;
let attemptsLeft = 20;
let highScore = 20;



// console.log(randomNum);

btn.addEventListener("click", () => {
    if (attemptsLeft > 0) {
        attemptsLeft--;
        score.innerHTML = attemptsLeft;

        let num = Number(val.value);

        if(num === 0) {
            message.innerHTML = "No number or 0 is entered";
        };

        if(num === secretNum) {
            message.innerHTML = "You won, and you are the best!";
        }





    }
});

