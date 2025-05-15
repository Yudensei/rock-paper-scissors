let humanScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelector("#choiceButtons");
const playButton = document.querySelector("#playButton");

const score = document.querySelector("#scores")
const numHumanScore = document.querySelector("#humanScore span");
const numComputerScore = document.querySelector("#computerScore span")

const resultMessage = document.querySelector("#result");

playButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  numHumanScore.textContent = humanScore;
  numComputerScore.textContent = computerScore;
  playButton.style.display = "none";
  choiceButtons.style.display = "block";
});

choiceButtons.addEventListener("click", (e) => {
  playRound(e.target.id, getComputerChoice());
  score.style.display = "block";
});

function playRound(humanChoice, computerChoice) {
  let choices = ["Scissors", "Paper", "Rock"];
  if (humanChoice === choices.at(computerChoice - 1)) {
    humanScore++;
    numHumanScore.textContent = humanScore;
    resultMessage.textContent = `You win! ${humanChoice} beats ${choices.at(computerChoice)}`
  } else if (humanChoice === choices.at(computerChoice)) {
    resultMessage.textContent = `It's a tie! ${humanChoice} ties with ${choices.at(computerChoice)}`
  } else {
    computerScore++;
    numComputerScore.textContent = computerScore;
    resultMessage.textContent = `You lose! ${choices.at(computerChoice)} beats ${humanChoice}`
  }

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    resultMessage.textContent = "You win!"
  } else if (computerScore === 5) {
    resultMessage.textContent = "You lose!"
  } else {
    return
  }

  choiceButtons.style.display = "none";
  playButton.style.display = "block"  
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
