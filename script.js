let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    // generate random number between 0-9
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if(humanGuess === computerGuess){
        // If both players are tied, the human user should win.
        console.log('human wins');
        return true;
    }
    else if (Math.abs(secretTarget - computerGuess) < Math.abs(secretTarget - humanGuess)) {
        console.log('computer wins');
        return false;
    }
    else {
        console.log('humans wins');        
        return true;
    }
}

const updateScore = (winner) => {
    if(winner === 'human')
        humanScore++;
    else
        computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1