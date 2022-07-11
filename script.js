

const computerSelection = () => {
    //generate computer's selection
    let randomChoice = Math.floor(Math.random()*3);
    switch (randomChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return'Scissors';
    }
    
}

function playRound(playerSelection, computerSelection) {
    //return a tie if both are the same
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase() ) {
        return "It's a tie!";
    } 
    
    else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock"
        }
        if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors"
        }
    } 
    else if (playerSelection.toLowerCase() == 'paper') {
            if (computerSelection == 'Scissors') {
                return "You Lose! Scissors beats Paper"
            }
            if (computerSelection == 'Rock') {
                return "You Win! Paper beats Rock"
            }
    } 
    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors"
        }
        if (computerSelection == 'Paper') {
            return "You Win! Scissors beats Paper"
        }

    }
    return;
}

function game() {
    //play a series of 5 games
    let totalScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let roundResult = playRound(playerSelection, computerSelection());
        console.log(roundResult);

        if (roundResult.includes('You Win!')) totalScore++;
        if (roundResult.includes('You Lose!')) totalScore--; 
     }

    console.log(`Total Score: ${totalScore}`);

    if (totalScore > 0) console.log('Congratulations! You are the winner!');
    else if (totalScore < 0 ) console.log('RIP. You are the loser.');
    else console.log('Match ended in a tie');
}

game();