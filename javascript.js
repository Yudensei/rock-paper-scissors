function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng == 0) {
        return "Rock"
    } else if (rng == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?", "rock").toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {   
    //Makes humanChoice case insensitive 
    humanChoice = humanChoice.toLowerCase();

    //Makes computerChoice have the same casing as humanChoice
    if (humanChoice == computerChoice.toLowerCase()) {
        console.log(`It's a tie! ${computerChoice} ties with ${computerChoice}`);
    } else if (humanChoice == "rock" && computerChoice == "Scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "Paper") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log(`You lose! Paper beats Rock`);
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "Scissors") {
        console.log(`You lose! Scissors beats Paper`);
        computerScore++;
    } else if (humanChoice == "scissors") {
        console.log(`You lose! Rock beats Scissors`);
        computerScore++;
    }
}