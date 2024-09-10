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


console.log(getComputerChoice());