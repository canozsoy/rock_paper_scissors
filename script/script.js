let round = 0,
    playerScore = +document.querySelector("#userScore").textContent,
    computerScore = +document.querySelector("#computerScore").textContent;

const options = ["rock", "paper", "scissors"];

const moveOptions = document.querySelectorAll(".option");
moveOptions.forEach(x => x.addEventListener("click", playRound));
const button = document.querySelectorAll("button");
button.forEach(x => x.addEventListener("click", btnClick));

function playRound(event) {
    /*let target = !event.target.getAttribute("data-value") ? event.target.offsetParent
        : event.target;*/
    
    const userMove = event.target.getAttribute("data-value");
    const computerMove = computerPlay();
    const userNode = document.querySelector("#userMove");
    const computerNode = document.querySelector("#computerMove");
    prepareImg("./static/" + userMove + ".svg", userMove, userNode);
    prepareImg("./static/" + computerMove + ".svg", computerMove, computerNode);
    const message = compareScore(userMove, computerMove);
    document.querySelector("#scoreHeader").textContent = message;
    document.querySelector("#userScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    round++;
    
    if (round === 5) {
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
        computerScore++;
        playerScore++;
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

function prepareImg (src, alt, parent) {
    parent.innerHTML = "";
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    parent.appendChild(img);
}

function finishTheGame() {
    moveOptions.forEach(x => x.removeEventListener("click", playRound));
    prepareScoreTable();
}

function prepareScoreTable() {
    let text = playerScore > computerScore ?
                    "You Won!"
                    : computerScore > playerScore ?
                    "You Lost!"
                    : "It's a Tie!";
                    text += " Wanna Play Again?";
    const targetNode = document.querySelector(".scoreTableText");
    targetNode.textContent = text;
    document.querySelector(".scoreTableContainer").style.display = "flex";
}

function closeScoreTable() {
    document.querySelector(".scoreTableContainer").style.display = "none";
}

function initialize () {
    window.location.reload();
}

function btnClick (event) {
    if (event.target.getAttribute("data-play") === "y") {
        initialize();
    } else {
        closeScoreTable();
    }
}
