function getComputerChoice() {
    let rdm = Math.random();
    if(rdm <= 1/3) {
        return "rock";
    } else if(rdm > 1/3 && rdm <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = String(prompt("Enter your choice: "));

    if(choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        return choice;
    } else {
        console.log("Please enter a valid choice (Rock/Paper/Scissors)");
        getHumanChoice();
    }
}

console.log(getHumanChoice());