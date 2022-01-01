const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function play() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      game(button.id);
    });
  });
}

function setScore() {
  const scoreboard = document.querySelector(".scoreboard");
  scoreboard.textContent = `Player score: ${playerScore.toString()} Computer score: ${computerScore.toString()}`;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return 3;
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return 0;
    } else {
      return 1;
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return 0;
    } else {
      return 1;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return 0;
    } else {
      return 1;
    }
  }
}

function game(playerSelection) {
  const computerSelection = computerPlay();

  if (playerSelection != null) {
    let result = playRound(playerSelection, computerSelection);
    if (result === 1) {
      playerScore++;
    } else if (result === 0) {
      computerScore++;
    }
  }
  setScore();
}

play();
