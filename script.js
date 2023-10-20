function getComputerChoice() {
    const weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * 3)];
}

const playerSelection = "rock";
// let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    //This function returns true if the player wins the round, false if not, and simply logs if draw
    let flatPlayerSelection = playerSelection.toLowerCase();
    if (flatPlayerSelection === computerSelection) {
        console.log("draw");
        return "draw"
    }

    else if (flatPlayerSelection === "rock") {
        if (computerSelection === "scissors"){
            console.log("round goes to player");
            return true
        }
        else if (computerSelection === "paper"){
            console.log("better luck next round!");
            return false
        }
    }

    else if (flatPlayerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("round goes to player");
            return true
        }
        else if (computerSelection === "scissors"){
            console.log("better luck next round!");
            return false
        }
    }

    else if (flatPlayerSelection === "scissors") {
        if (computerSelection === "paper"){
            console.log("round goes to player");
            return true
        }
        else if (computerSelection === "rock"){
            console.log("better luck next round!");
            return false
        }
    }

    else {
        console.log("check your code");
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computer = "";
    for (i=0; i < 5; i++) { 
        computer = getComputerChoice();
        const playerWin = playRound(playerSelection, computer);
        if (playerWin === "draw") continue
        else if (playerWin) playerScore++
        else if (!playerWin) computerScore++
        
    }
    console.log(`Player: ${playerScore}, Computer ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Well Done!");
    } 
    else if (playerScore < computerScore) {
        console.log("Better luck next time!");
    }
    else {
        console.log("DRAW");
    }
}


console.log(game());