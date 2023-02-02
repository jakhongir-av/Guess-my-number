const val = document.querySelector(".guess");
const btn = document.querySelector(".check");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const body = document.querySelector(".body");

let changedScore = 20;

const randomNum = Math.trunc(Math.random() * 20);

score.innerHTML = changedScore;



console.log(randomNum);

btn.addEventListener("click", (a) => {
    a.preventDefault();
    const result = +val.value;
    console.log(result);
    
    for (let i = 20; i > 0; i--) {
        if(+result) {
                if(result === randomNum) {
                    message.innerHTML = "True";
                    body.classList.add("bg_color");

                }else{
                    score.innerHTML = changedScore-1;
                    message.innerHTML = "Wrong!";
                    body.classList.add("bg_wrong")
                };
            }else{
                alert("It is not a number, Please type a number!")
        }
    }

    

});
