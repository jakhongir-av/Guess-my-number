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
