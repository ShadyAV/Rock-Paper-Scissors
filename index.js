humanChoice();
function humanChoice() {
    let button = document.querySelectorAll(".button");
    for (i of button) {
        i.addEventListener('click', function () {
            clearBoard();
            playGame(this.id);
            this.style.borderColor = "red";
        });
    }
}

function playGame(id) {
    let humanScoreDOM = document.getElementById("humanScore");
    let computerScoreDOM = document.getElementById("compScore");
    let compId = computerChoice();
    if (id === compId.slice(4)) {
        console.log("tie");
    }
    else if
        (
        (id === "rock" && compId === "compscissors") ||
        (id === "paper" && compId === "comprock") ||
        (id === "scissors" && compId === "comppaper")
    ) {
        humanScoreDOM.textContent = parseInt(humanScoreDOM.textContent) + 1;
    }
    else {
        computerScoreDOM.textContent = parseInt(computerScoreDOM.textContent) + 1;
    }
    gameOver(parseInt(humanScoreDOM.textContent), parseInt(computerScoreDOM.textContent));

}

function gameOver(humanScore, computerScore) {
    let gameOverText = document.getElementById("gameOverText");
    let sectionDOM = document.querySelectorAll("img");
    if (humanScore === 5) {
        gameOverText.textContent = "YOU WON";
        for (i of sectionDOM) {
            i.style.visibility = "hidden";
        }
    } else if (computerScore === 5) {
        gameOverText.textContent = "YOU LOST";
        for (i of sectionDOM) {
            i.style.visibility = "hidden";
        }
    }
}

function playAgain() {
    let sectionDOM = document.querySelectorAll("img");
    for (i of sectionDOM) {
        i.style.visibility = "visible";
    }
    let buttons = document.querySelectorAll("img");
    buttons.forEach(element => element.style.borderColor = "#826969");
    let humanScoreDOM = document.getElementById("humanScore");
    let computerScoreDOM = document.getElementById("compScore");
    humanScoreDOM.textContent = 0;
    computerScoreDOM.textContent = 0;
    let gameOverText = document.getElementById("gameOverText");
    gameOverText.textContent = "";
}

function clearBoard() {
    let buttons = document.querySelectorAll("img");
    buttons.forEach(element => element.style.borderColor = "#826969");
}

function computerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerButton = document.querySelectorAll(".compButton");
    computerButton[choice].style.borderColor = "red";
    return computerButton[choice].id;
}

