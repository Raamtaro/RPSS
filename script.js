// Need:
// getComputerChoice() function ---> is the computer choosing rock, paper, or scissors? returns either of these three values as a string
// computerSelection = getComputerChoice()
// playRound(playerSelection, computerSelection) ---> playerSelection is manually input... for now


function getComputerChoice() {
    const rpsNumber = Math.floor(Math.random() * 3) + 1;
    let selection = "";
    if (rpsNumber === 1) {
        selection = "rock";
    } 
    else if (rpsNumber === 2) {
        selection = "paper";
    }
    else if (rpsNumber === 3) {
        selection = "scissors";
    } 
    else {
        console.log("Your code is fucked up");
    }

    return selection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let flatPlayerSelection = playerSelection.toLowerCase();
    if (flatPlayerSelection === computerSelection) {
        console.log("draw");
    }

    else if (flatPlayerSelection === "rock") {
        if (computerSelection === "scissors"){
            console.log("round goes to player");
        }
        else if (computerSelection === "paper"){
            console.log("better luck next round!");
        }
    }

    else if (flatPlayerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("round goes to player");
        }
        else if (computerSelection === "scissors"){
            console.log("better luck next round!");
        }
    }

    else if (flatPlayerSelection === "scissors") {
        if (computerSelection === "paper"){
            console.log("round goes to player");
        }
        else if (computerSelection === "rock"){
            console.log("better luck next round!");
        }
    }

    else {
        console.log("check your code");
    }
}

console.log(playRound(playerSelection, computerSelection));