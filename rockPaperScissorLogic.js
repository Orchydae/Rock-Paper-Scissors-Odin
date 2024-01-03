console.log("rockPaperScissorLogic.js loaded");

// + ATTRIBUTES +
let playerScore = 0;
let computerScore = 0;
let round = 1;

// + FUNCTIONS +
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
    const roundResult = document.getElementById("roundCount");

    if (selectedOption) {
        playerChoiceResult.textContent = "Your choice: " + selectedOption.value;
    } else {
        playerChoiceResult.textContent = "No option selected";
    }

    computerChoiceResult.textContent = "Computer choice: " + computerChoiceValue;

    determineWinner(computerChoiceValue, selectedOption.value);
    roundResult.textContent = "Round: " + round;
}

function determineWinner(computerChoice, playerChoice) {
    const winner = document.getElementById("result");

    if (computerChoice === playerChoice) {
        winner.textContent = "It's a tie!";
    } else if ((computerChoice === "rock" && playerChoice === "scissors") 
    || (computerChoice === "paper" && playerChoice === "rock")
    || (computerChoice === "scissors" && playerChoice === "paper")) {
        winner.textContent = "Computer wins!";
        updateScore("computer");
    } else {
        winner.textContent = "You win!";
        updateScore("player");
    }

}

function updateScore(winner) {
    switch (winner) {
        case "computer":
            computerScore++;
            break;
        case "player":
            playerScore++;
            break;
        default:
            break;
    }
    round++; 
}