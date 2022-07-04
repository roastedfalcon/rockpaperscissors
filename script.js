

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
    
}

console.log(computerPlay());