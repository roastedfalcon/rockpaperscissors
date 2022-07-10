

function computerPlay() {
    let randomChoice = Math.floor(Math.random()*3);
    let computerChoice;
    switch (randomChoice) {
        case 0:
            computerChoice = 'Rock';
        case 1:
            computerChoice = 'Paper';
        case 2:
            computerChoice = 'Scissors';
    }
    return computerChoice;
}

function play(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase() ) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock"
        }
        if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
            if (computerSelection == 'Scissors') {
                return "You Lose! Scissors beats Paper"
            }
            if (computerSelection == 'Rock') {
                return "You Win! Paper beats Rock"
            }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors"
        }
        if (computerSelection == 'Paper') {
            return "You Win! Scissors beats Paper"
        }

    }
    return -1;
}

function game() {
    
}

console.log(play('rock',computerPlay()));