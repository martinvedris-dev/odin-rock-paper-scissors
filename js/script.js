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
            console.log("INVALID INPUT!");
            return;
    }

    return playerSelection;
}