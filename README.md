# RPSS
Rock, Paper, or Scissors? You decide!


Understand the problem: Rock Paper Scissors

desired inputs: User selects Rock, paper, or scissors

Need a function which has the computer/opponent randomly selects a choice out of the three ---> Returns the computerselection (getComputerChoice())

then I need a function which compares my choice against the computer and returns 'You win' or 'you lose' (playRound())

Lastly, game() will call playRound() 5 times (maybe via a loop or something) and will declare a winner based on the best of 5!




Pseudo:

getComputerChoice() ----> This should return "rock", "paper", or "scissors"

    generate random number, translate it between 1 and 3, maybe via... 
    rpsNumber = Math.floor(Math.random() * 3) + 1;


    take that random number, and set up some logic to choose rock, paper or scissor. maybe via...

    if (rpsNumber === 1) {
        let computerSelection = "rock";
    }
    else if (rpsNumber === 2) {
        let computerSelection = "paper";
    }
    else if (rpsNumber === 3) {
        let computerSelection = "scissors";
    }
    else {
        console.log("check your rpsNumber logic");
    }


    return computerSelection

let computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection) ----> This should return "nice" or "better luck next round"

    This one is essentially a lot of logic, I think. 
    First thing is that we need to flatten the playerSelection input:

    let flatPlayerSelection = playerSelection.toLowerCase();

    Now we need to compare the flatPlayerSelection to the computerSelection:

    if (flatPlayerSelection === computerSelection) {
        console.log("draw");
    }

    else if (flatPlayerSelection === "rock") {
        if (computerSelection === "scissors"){
            console.log("round goes to player");
        }
        else if (computerSelection === "paper"){
            console.log("better luck next round!);
        }
    }

    else if (flatPlayerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("round goes to player");
        }
        else if (computerSelection === "scissors"){
            console.log("better luck next round!);
        }
    }

    else if (flatPlayerSelection === "scissors") {
        if (computerSelection === "paper"){
            console.log("round goes to player");
        }
        else if (computerSelection === "rock"){
            console.log("better luck next round!);
        }
    }

    else {
        console.log("check your code");
    }