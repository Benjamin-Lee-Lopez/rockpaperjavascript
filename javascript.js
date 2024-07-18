console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
        return choice.toLowerCase();
    } else {
        return getHumanChoice();
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        switch(computerChoice) {
            case("rock"):
                console.log("Tie! Rock ties with rock.");
                break;
            case("paper"):
                console.log("You lose! Paper loses to rock.");
                computerScore++;
                break;
            case("scissors"):
                console.log("You win! Rock beats scissors.");
                humanScore++;
                break;
        }

    } else if (humanChoice == "paper") {
        switch(computerChoice) {
            case("rock"):
                console.log("You win! Paper beats rock.");
                humanScore++;
                break;
            case("paper"):
                console.log("Tie! Paper ties with paper.");
                break;
            case("scissors"):
                console.log("You lose! Paper loses to scissors.");
                computerScore++;
                break;
        }

    } else if (humanChoice == "scissors") {
        switch(computerChoice) {
            case("rock"):
                console.log("You lose! Scissors loses to rock.");
                computerScore++;
                break;
            case("paper"):
                console.log("You win! Scissors beats paper.");
                humanScore++;
                break;
            case("scissors"):
                console.log("Tie! Scissors ties with scissors.");
                break;
        }
    
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }
}

playGame();