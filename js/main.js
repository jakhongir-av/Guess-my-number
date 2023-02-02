const val = document.querySelector(".guess");
const btn = document.querySelector(".check");
const score = document.querySelector(".score");

const changedScore = score.innerHTML = 20;

const randomNum = Math.floor(Math.random() * 20);



console.log(randomNum);

btn.addEventListener("click", (a) => {
    a.preventDefault();
    const result = +val.value;
    console.log(result);
    
    if(+result) {
        if(result === randomNum) {
            alert("TRUE, You are the best!!");
        }else{
            alert("Not Bad!");
        };
    }else{
        alert("It is not a number, Please type a number!")
    }

});
