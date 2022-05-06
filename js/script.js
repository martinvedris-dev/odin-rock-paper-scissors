/* Function returns random value from and array - simulate computer play */
function computerPlay() {
    let possibleSelection = ["rock", "paper", "scissors"];
    let computerSelection = possibleSelection[Math.floor(Math.random() * possibleSelection.length)];
    return computerSelection;
}

/* Function returns playerSelection */
function playerPlay() {
    /* Get playerInput from a prompt */
    let playerInput = prompt("Play a game of rock, paper, scissors", "rock, paper, scissors");
    /* Check if playerInput was canceled */
    if (playerInput === null) {
        return;
    }
    /* Turn playerInput to playerSelection so it's case-insensitive */
    let playerSelection = playerInput.toLowerCase();

    /* Check if playerSelection is valid for a game */
    switch (playerSelection) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:
            return;
    }

    return playerSelection;
}

/* Function plays single round of rock, paper, scissors */
function playRound(playerSelection, computerSelection) {
    /* Check if playerSelection is undefined */
    while (playerSelection === undefined) {
        playerSelection = playerPlay();
    }

    /* Rock, paper, scissors - logic */
    if (playerSelection === computerSelection) {
        // TIE 
       return(`Game tied - both player selected ${playerSelection}`);
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        // PLAYER WIN 
       return(`You win - ${playerSelection} beats ${computerSelection}`);
    } else {
        // COMPUTER WIN
       return(`You lose - ${computerSelection} beats ${playerSelection}`);
    }
}