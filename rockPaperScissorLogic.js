console.log("rockPaperScissorLogic.js loaded");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function play(computerChoiceResult, selectedOption) {
    const playerChoiceResult = document.getElementById("playerChoiceResult");
    const computerChoiceValue = getComputerChoice();
    if (selectedOption) {
        playerChoiceResult.textContent = "Your choice: " + selectedOption.value;
    } else {
        playerChoiceResult.textContent = "No option selected";
    }

    computerChoiceResult.textContent = "Computer choice: " + computerChoiceValue;

    determineWinner(computerChoiceValue, selectedOption.value);
}

function determineWinner(computerChoice, playerChoice) {
    const winner = document.getElementById("result");

    if (computerChoice === playerChoice) {
        winner.textContent = "It's a tie!";
    } else if ((computerChoice === "rock" && playerChoice === "scissors") 
    || (computerChoice === "paper" && playerChoice === "rock")
    || (computerChoice === "scissors" && playerChoice === "paper")) {
        winner.textContent = "Computer wins!";
    } else {
        winner.textContent = "You win!";
    }
}