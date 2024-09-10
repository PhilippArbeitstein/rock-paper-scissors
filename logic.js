let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = String(prompt("Enter your choice: ")).toLowerCase();

    if(choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        console.log("Please enter a valid choice (Rock/Paper/Scissors)");
        getHumanChoice();
    }
}

function playRound(human, computer) {
    if(human == "rock" && computer == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (human == "scissors" && computer == "rock") {
        console.log("You loose! Rock beats Scissors");
        computerScore++;
    } else if (human == "rock" && computer == "paper") {
        console.log("You loose! Paper beats Rock");
        computerScore++;
    } else if (human == "paper" && computer == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (human == "scissors" && computer == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (human == "paper" && computer == "scissors") {
        console.log("You loose! Scissors beats Paper");
        computerScore++;
    }  else if (human == "paper" && computer == "paper") {
        console.log("Draw! Both chose Paper");
    } else if (human == "scissors" && computer == "scissors") {
        console.log("Draw! Both chose Scissors");
    } else if (human == "rock" && computer == "rock") {
        console.log("Draw! Both chose Rock");
    } 
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You've won the game!");
    } else if(humanScore < computerScore){
        console.log("You've sadly lost the game!");
    } else {
        console.log("Well ... that's a draw!")
    }
}

playGame();



