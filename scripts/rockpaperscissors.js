const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function play() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      game(input.id);
    });
  });
}

function checkScore() {
  const scoreboard = document.querySelector(".scoreboard");
  const round = document.querySelector(".round");
  if (playerScore === 5 && computerScore < 5) {
    scoreboard.textContent = `YOU WON!!🎉🎉 Your score: ${playerScore.toString()} Computer score: ${computerScore.toString()}`;
    round.textContent = "";
    playerScore = 0;
    computerScore = 0;
  } else if (playerScore < 5 && computerScore === 5) {
    scoreboard.textContent = `Computerino won :( Your score: ${playerScore.toString()} Computer score: ${computerScore.toString()}`;
    playerScore = 0;
    computerScore = 0;
    round.textContent = "";
  } else {
    setScore();
  }
}

function setScore() {
  const scoreboard = document.querySelector(".scoreboard");
  scoreboard.textContent = `Player score: ${playerScore.toString()} Computer score: ${computerScore.toString()}`;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

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
  const round = document.querySelector(".round");
  if (playerSelection != null) {
    let result = playRound(playerSelection, computerSelection);
    if (result === 1) {
      playerScore++;
      round.textContent = "You win the round!";
    } else if (result === 0) {
      computerScore++;
      round.textContent = "Computer wins the round!";
    } else {
      round.textContent = "Draw!";
    }
  }
  checkScore();
}

play();
