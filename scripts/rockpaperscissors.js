const options = ['rock', 'paper', 'scissors']

function computerPlay() {
	return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()
	computerSelection = computerSelection.toLowerCase()

	console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}`)


	if(playerSelection === computerSelection) {
		return 3
	}

	if(playerSelection == 'rock') {
		if(computerSelection == 'paper') {
			return 0
		} else {
			return 1
		}
	}

	if(playerSelection == 'paper') {
		if(computerSelection == 'scissors') {
			return 0
		} else {
			return 1
		}
	}

	if(playerSelection == 'scissors') {
		if(computerSelection == 'paper') {
			return 0
		} else {
			return 1
		}
	}
}

function game() {

	let playerScore = 0
	let computerScore = 0

	for(let i = 0; i < 5; i++) {
		//const playerSelection = computerPlay()
		const playerSelection = window.prompt("Rock, paper or scissors?")
		const computerSelection = computerPlay()
		let result = playRound(playerSelection, computerSelection)
		if(result === 1) {
			playerScore++
		} else if(result === 0) {
			computerScore++
		} 
	}

	if(playerScore >= computerScore) {
		return `Player wins! Result: ${playerScore} - ${computerScore}`
	} else {
		return `Computer wins! Result: ${computerScore} - ${playerScore}`
	}
}



console.log(game())

