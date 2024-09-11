let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const buttonList = document.querySelectorAll("button");
const score = document.querySelector("h2");
const winner = document.querySelector("h3");


score.textContent = "" +humanScore + " : " + computerScore+ " ";

function getComputerChoice() {
    let rdm = Math.random();
    if(rdm >= 0 && rdm <= 1/3) {
        return "rock";
    } else if(rdm > 1/3 && rdm <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(choice) {
    if(choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        console.log("Please enter a valid choice (Rock/Paper/Scissors)");
    }
}

buttonList.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (humanScore == 0 & computerScore == 0) {
            winner.textContent = '';
        }
        const humanChoice = getHumanChoice(btn.textContent.toLowerCase());
        const computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);
        playGame(humanChoice, computerChoice);
    });
});

function playRound(human, computer) {
    if(human == "rock" && computer == "scissors") {
        humanScore++;
    } else if (human == "scissors" && computer == "rock") {
        computerScore++;
    } else if (human == "rock" && computer == "paper") {
        computerScore++;
    } else if (human == "paper" && computer == "rock") {
        humanScore++;
    } else if (human == "scissors" && computer == "paper") {
        humanScore++;
    } else if (human == "paper" && computer == "scissors") {
        computerScore++;
    }  else if (human == "paper" && computer == "paper") {
    } else if (human == "scissors" && computer == "scissors") {
    } else if (human == "rock" && computer == "rock") {
    }
    score.textContent = "" +humanScore + " : " + computerScore+ " ";
}

function playGame(human, computer) {
    if(roundsPlayed < 4) {
        playRound(human, computer);
        roundsPlayed++;
    } else {
        if (humanScore > computerScore) {
            winner.textContent = "You've won the game!";
        } else if(humanScore < computerScore){
            winner.textContent = "You've sadly lost the game!";
        } else {
            winner.textContent = "Well ... that's a draw!";
        }
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
    }
}