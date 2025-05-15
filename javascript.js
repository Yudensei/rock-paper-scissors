playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  playRound(getHumanChoice(), 0)

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }

  function playRound(humanChoice, computerChoice) {
    const captalizedHumanChoice = humanChoice.at(0).toUpperCase()
                                + humanChoice.slice(1);
    
    choices = ["scissors", "paper", "rock"]
    if (humanChoice === choices.at(computerChoice - 1)) {
      humanScore++;
      return "win"
    } else if (humanChoice === choices.at(computerChoice)) {
      return "tie"
    } else {
      computerScore++;
      return "loss"
    }

  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?", "rock").toLowerCase();
}