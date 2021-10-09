let round = 0,
    playerScore = +document.querySelector("#userScore").textContent,
    computerScore = +document.querySelector("#computerScore").textContent,
    playAgain = "y";

String.prototype.toSentenceCase = function () {
    let string = this.valueOf()
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const options = ["rock", "paper", "scissors"];

const moveOptions = document.querySelectorAll(".option");
moveOptions.forEach(x => x.addEventListener("click", playRound));

function playRound(event) {
    console.log(event.target.nodeType)
    const userMove = event.target.getAttribute("data-value");
    
    const computerMove = computerPlay();
    console.log(userMove, computerMove)
    const message = compareScore(userMove, computerMove);
    round++;
    document.querySelector("#roundScore").textContent = `Round: ${round}`;
    document.querySelector("#roundWinner").textContent = message;
    if (round === 6) {
        moveOptions.forEach(x => x.removeEventListener("click", playRound));
        finishTheGame();
    }
}

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function compareScore(playerSelection, computerSelection) {
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

function finishTheGame() {
    console.log("Finish")
}
