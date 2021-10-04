let round = 0,
    playerScore = 0,
    computerScore = 0,
    playAgain = "y";

String.prototype.toSentenceCase = function () {
    let string = this.valueOf()
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const options = ["rock", "paper", "scissors"];

while (playAgain === "y") {

    game();

    if (round === 5) {
        let resultMessage = playerScore > computerScore ? "Player Wins!"
            : playerScore === computerScore ? "It's a Tie"
                : "Computer Wins!";
        playAgain = prompt(`Player score: ${playerScore}, Computer score: ${computerScore}, ` +  resultMessage + " Wan't To Play Again? (y/n)");

        if (playAgain === "y") {
            round = 0;
            playerScore = 0;
            computerScore = 0;
        }
    }
}



function game() {
    while (round < 5) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        if (!playerSelection) {
            break;
        } else {
            const message = playRound(playerSelection, computerSelection);
            console.log(`Your move: ${playerSelection.toSentenceCase()}, Computer move: ${computerSelection.toSentenceCase()}, ` + message);
            round++;
        }
    }
}

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function userPlay() {

    let inputController = false,
        userChoice;

    while (inputController === false) {
        userChoice = (prompt("Rock, paper or scissors?")).trim().toLowerCase();
        if (!userChoice) {
            console.log("Cancelled!");
            break;
        } else {
            if (!options.includes(userChoice)) {
                console.log("Entry is unrecognized! Please enter again!");
            } else {
                inputController = true;
            }
        }
    }
    return userChoice;
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection === computerSelection) {
        message = "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        message = "Computer Wins!";
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = "Computer Wins!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = "Computer Wins!";
        computerScore++;
    } else {
        message = "Player Wins!";
        playerScore++;
    }
    return message;
}
