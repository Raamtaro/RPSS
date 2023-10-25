const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

let results = document.querySelector(".round-results");
let scoreKeeping = document.querySelector(".game-results");

let playerScore = 0;
let computerScore = 0;

scoreKeeping.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

const weaponOptions = document.querySelector(".options");
weaponOptions.appendChild(rockButton);
weaponOptions.appendChild(paperButton);
weaponOptions.appendChild(scissorsButton);

function getComputerChoice() {
    const weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    //This function returns true if the player wins the round, false if not, and simply logs if draw
    let flatPlayerSelection = playerSelection.toLowerCase();
    if (flatPlayerSelection === computerSelection) {
        // console.log("draw");
        
        results.textContent = "Draw";
        return "draw"
    }

    else if (flatPlayerSelection === "rock") {
        if (computerSelection === "scissors"){
            // console.log("round goes to player");
            return true
        }
        else if (computerSelection === "paper"){
            // console.log("better luck next round!");
            return false
        }
    }

    else if (flatPlayerSelection === "paper") {
        if (computerSelection === "rock"){
            // console.log("round goes to player");
            return true
        }
        else if (computerSelection === "scissors"){
            // console.log("better luck next round!");
            return false
        }
    }

    else if (flatPlayerSelection === "scissors") {
        if (computerSelection === "paper"){
            // console.log("round goes to player");
            return true
        }
        else if (computerSelection === "rock"){
            // console.log("better luck next round!");
            return false
        }
    }

    else {
        // console.log("check your code");
    }
}

rockButton.addEventListener('click', () => {
    let computerPick = getComputerChoice();
    let winORlose = playRound("rock", computerPick);
    console.log(computerPick);
    if (playerScore === 5 || computerScore === 5) {
        alert("Refresh the page to play another game!");
    }
    else {
        if (winORlose === "draw") {
            results.textContent = `No winner, make another selection`;
        }
        else if (winORlose) {
            playerScore++;
            results.textContent = "Round goes to player!";
        } 
        else if (!winORlose) {
            computerScore++;
            results.textContent = "Boooooo round goes to computer :(";
        };      
    };

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) scoreKeeping.textContent = "You've won 5 rounds! Bravo!";
        else if (computerScore === 5) scoreKeeping.textContent = "Computer has won 5 rounds before you did. You've lost. Loser!";
    } else if (playerScore < 5 && computerScore < 5) {
        scoreKeeping.textContent = `Player: ${playerScore}, Computer: ${computerScore}`};
});

paperButton.addEventListener('click', () => {
    let computerPick = getComputerChoice();
    let winORlose = playRound("paper", computerPick);
    console.log(computerPick);
    if (playerScore === 5 || computerScore === 5) {
        alert("Refresh the page to play another game!");
    }
    else {
        if (winORlose === "draw") {
            results.textContent = `No winner, make another selection`;
        }
        else if (winORlose) {
            playerScore++;
            results.textContent = "Round goes to player!";
        } 
        else if (!winORlose) {
            computerScore++;
            results.textContent = "Boooooo round goes to computer :(";
        };      
    };
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) scoreKeeping.textContent = "You've won 5 rounds! Bravo!";
        else if (computerScore === 5) scoreKeeping.textContent = "Computer has won 5 rounds before you did. You've lost. Loser!";
    } else if (playerScore < 5 && computerScore < 5) {
        scoreKeeping.textContent = `Player: ${playerScore}, Computer: ${computerScore}`};
});

scissorsButton.addEventListener('click', () => {
    let computerPick = getComputerChoice();
    let winORlose = playRound("scissors", computerPick);
    console.log(computerPick);
    if (playerScore === 5 || computerScore === 5) {
        alert("Refresh the page to play another game!");
    }
    else {
        if (winORlose === "draw") {
            results.textContent = `No winner, make another selection`;
        }
        else if (winORlose) {
            playerScore++;
            results.textContent = "Round goes to player!";
        } 
        else if (!winORlose) {
            computerScore++;
            results.textContent = "Boooooo round goes to computer :(";
        };      
    };
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) scoreKeeping.textContent = "You've won 5 rounds! Bravo!";
        else if (computerScore === 5) scoreKeeping.textContent = "Computer has won 5 rounds before you did. You've lost. Loser!";
    } else if (playerScore < 5 && computerScore < 5) {
        scoreKeeping.textContent = `Player: ${playerScore}, Computer: ${computerScore}`};
});
