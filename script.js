
function getComputerSelection() {
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

function playRound() {
    let computerSelection = getComputerSelection();
    let playerSelection = this.id;
    let result = '';
    
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase() ) {
        result = "It's a tie!";
    } 
    
    else if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection == 'Paper') {
            result = "You Lose! Paper beats Rock"
        }
        if (computerSelection == 'Scissors') {
            result = "You Win! Rock beats Scissors"
        }
    } 
    else if (playerSelection.toLowerCase() == 'paper') {
            if (computerSelection == 'Scissors') {
                result = "You Lose! Scissors beats Paper"
            }
            if (computerSelection == 'Rock') {
                result = "You Win! Paper beats Rock"
            }
    } 
    else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection == 'Rock') {
            result = "You Lose! Rock beats Scissors"
        }
        if (computerSelection == 'Paper') {
            result = "You Win! Scissors beats Paper"
        }
    }
    keepScore(result);
}

function keepScore(roundResult) {
    if (roundResult.includes('You Win!')) playerScore++;
    if (roundResult.includes('You Lose!')) cpuScore++;

    const divRoundResult = document.querySelector('#roundResult');
    divRoundResult.textContent = roundResult;

    const runningScore = document.querySelector('#runningScore');
    runningScore.textContent = `${playerScore} - ${cpuScore}`;
    
    if (playerScore == 5 || cpuScore == 5) announceWinner();
}

function announceWinner() {
    const matchResult = document.createElement('div');
    if (playerScore == 5) matchResult.textContent ='Congratulations! You are the winner!';
    if (cpuScore == 5 ) matchResult.textContent = 'That sucks. You are the loser.';
    document.body.appendChild(matchResult);

    buttons.forEach(button => button.removeEventListener('click', playRound)); //stop playing after winner is announced
    playAgain();
}

//play again button
function playAgain() {
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Play Again';
    document.body.appendChild(refreshButton);
    refreshButton.addEventListener('click', () => window.location.reload());
}


var playerScore = 0;
var cpuScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
