let playerScore=0, compScore=0;
let userChoice,compChoice;

let userWinCounter = document.querySelector("#user_score_count");
let compWinCounter = document.querySelector("#comp_score_count");
let msg = document.querySelector("#msg");

let options = document.querySelectorAll(".choice");


options.forEach((option)=>
{
    option.addEventListener("click", ()=>
    {
        userChoice = option.getAttribute("id");
        // console.log("User : ", userChoice);

        playGame(userChoice);
    })
});

function playGame(userChoice)
{
    let userWon = false;

    compChoice = generateChoice();
    // console.log("Comp : ",compChoice);
    if(compChoice === userChoice)
    {
        // console.log("GAME DRAW");
        msg.innerText = `GAME DRAW\n COMP PLAYED ${compChoice.toUpperCase()}`;
    }
    else
    {
        if(userChoice === "rock")
        {
            userWon = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper")
        {
            userWon = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissors")
        {
            userWon = compChoice === "paper" ? true : false;
        }

        if(userWon)
        {
            // console.log("YOU WIN");
            playerScore++;
            userWinCounter.innerText = playerScore;
            msg.innerText = `YOU WIN \n COMP PLAYED ${compChoice.toUpperCase()}`;
        }
        else
        {
            // console.log("YOU LOSE");
            compScore++;
            compWinCounter.innerText = compScore;
            msg.innerText = `YOU LOSE\n COMP PLAYED ${compChoice.toUpperCase()}`;
        }
    }

}

function generateChoice()
{
    let compOptions = ["rock", "paper", "scissors"];
    let compIndex = Math.floor(Math.random()*3);
    return compOptions[compIndex];
}