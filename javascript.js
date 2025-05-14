playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }

  function playRound(humanChoice, computerChoice) {
    captalizedHumanChoice =
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    let win;

    if (captalizedHumanChoice == computerChoice) {
      console.log(`It's a tie! ${computerChoice} ties with ${computerChoice}`);
      return;
    } else if (captalizedHumanChoice == "Rock" 
            && computerChoice == "Scissors") {
        win = true;
    } else if (captalizedHumanChoice == "Paper"
            && computerChoice == "Rock") {
        win = true;
    } else if (captalizedHumanChoice == "Scissors"
            && computerChoice == "Paper") {
        win = true;
    } else if (captalizedHumanChoice == "Rock"
            && computerChoice == "Paper") {
        win = false;
    } else if (captalizedHumanChoice == "Paper"
            && computerChoice == "Scissors") {
        win = false;
    } else if (captalizedHumanChoice == "Scissors") {
        win = false;
    }

    if (win) {
      console.log(`You win! ${captalizedHumanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${captalizedHumanChoice}`);
      computerScore++;
    }
  }
}

function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  if (rng == 0) {
    return "Rock";
  } else if (rng == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?", "rock").toLowerCase();
}
