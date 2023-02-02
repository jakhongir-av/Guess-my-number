const val = document.querySelector(".guess");
const btn = document.querySelector(".check");
const currentScoreEl = document.querySelector(".score");
const messageEl = document.querySelector(".message");
const bodyEl = document.querySelector(".body");
const highScoreEl = document.querySelector(".highscore");


//? For the Next round
const secBtn = document.querySelector(".btn");
const changable = document.querySelector(".changable");


//* Secret Number
const secretNum = Math.trunc(Math.random() * 20);
console.log(secretNum);

let currentScore = 20;
let highScore = 20;
let currentLevel = 1;



btn.addEventListener("click", () => {
    if (currentScore > 0) {
        currentScoreEl.innerHTML = currentScore;

        let num = Number(val.value);

        if(num === 0) {
            messageEl.innerHTML = "No number or 0 is entered, <br><br> <b>Please enter the number!</b>";
        }
        else if(num === secretNum) {
            messageEl.innerHTML = "You won, and you can continue...";


            bodyEl.style.backgroundColor = "#52BE80";
            
            highScoreEl.innerHTML = currentScore++;

            btn.setAttribute("disabled", "disabled");   
            secBtn.removeAttribute("disabled");

        }
        else if(val !== secretNum) {
            if(currentScore > 0) {
                let message = val > secretNum ? "Too high!" : "Too low!";
                messageEl.innerHTML = message;

                currentScore--;

                currentScoreEl.innerHTML = currentScore;
            }else {
                messageEl.innerHTML = "You lost the game!";

                currentScoreEl.innerHTML = 0;

                bodyEl.style.backgroundColor = "#EC7063";
            };
        };


    }else {
        messageEl.innerHTML = "You lost the game!";
        currentScoreEl.innerHTML = 0;
        bodyEl.style.backgroundColor = "#EC7063";
    }
});

secBtn.addEventListener("click", () => {
    console.log("Hello world");

    

    if (changable === 20) {
        secBtn.setAttribute("disabled", "disabled");
    }

});