let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.buttons');
const rockElement = document.querySelector('#rock');
const paperElement = document.querySelector('#paper');
const scissorsElement = document.querySelector('#scissors');
const playerScoreElement = document.querySelector('.player-score');
const computeScoreElement = document.querySelector('.computer-score');
const roundOutcomeLog = document.querySelector('.round-outcome-log');
const scoreTitle = document.querySelector('.score-title');

rockElement.addEventListener('click', () => playRound('rock', computerPlay()));
paperElement.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsElement.addEventListener('click', () => playRound('scissors', computerPlay()));

/* Game rules with alert */
alert("First to 5 wins");

/* Function returns random value from and array - simulate computer play */
function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

/* Function plays single round of rock, paper, scissors */
function playRound(playerSelection, computerSelection) {
    /* Rock, paper, scissors - logic */
    if (playerSelection === computerSelection) {
        // TIE 
        roundOutcomeLog.innerHTML += "<p>Game tied - both player selected " + playerSelection + "</p> <br>";
        // console.log(`Game tied - both player selected ${playerSelection}`);
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        // PLAYER WIN 
        playerScore += 1;
        playerScoreElement.innerHTML = playerScore;
        roundOutcomeLog.innerHTML += "<p style='color: #329918;'>You win - " + playerSelection + " beats " + computerSelection + "</p> <br>";
        // console.log(`You win - ${playerSelection} beats ${computerSelection}`);
    } else {
        // COMPUTER WIN
        computerScore += 1;
        computeScoreElement.innerHTML = computerScore;
        roundOutcomeLog.innerHTML += "<p style='color: #b8120f;'>You lose - " + computerSelection + " beats " + playerSelection + "</p> <br>";
        // console.log(`You lose - ${computerSelection} beats ${playerSelection}`);
    }

    if (computerScore === 5) {
        scoreTitle.innerHTML += "<p style='padding: 25px; color: #b8120f;'>BOOO! Computer wins</p>";
        playAgain();
        
    }
    if (playerScore === 5) {
        scoreTitle.innerHTML += "<p style='padding: 25px; color: #329918;'>YEAH! You win</p>"
        playAgain();
    }
}

/* restart function */
function playAgain() {
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again-button');
    playAgainButton.innerHTML = "Play again";
    playAgainButton.addEventListener('click', () => document.location.reload(true));

    rockElement.remove();
    paperElement.remove();
    scissorsElement.remove();

    buttons.appendChild(playAgainButton);
}