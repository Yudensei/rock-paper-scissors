let humanScore = 0;
let computerScore = 0;

const leftdiv = document.querySelector("#left-div");
const rightdiv = document.querySelector("#right-div");

const game = document.querySelector("#game");

const choiceButtons = document.querySelector("#choiceButtons");
const playButton = document.querySelector("#playButton");

const score = document.querySelector("#scores")
const numHumanScore = document.querySelector("#humanScore span");
const numComputerScore = document.querySelector("#computerScore span")

const resultMessage = document.querySelector("#result");

const leftImage = document.createElement("img");
leftImage.setAttribute("width", "300px")
leftdiv.appendChild(leftImage);

const rightImage = document.createElement("img");
rightImage.setAttribute("width", "300px")
rightImage.style.cssText = "transform: rotateY(180deg)";
rightdiv.appendChild(rightImage);


playButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  playButton.style.visibility = "collapse";
  choiceButtons.style.visibility = "visible";
});

choiceButtons.addEventListener("click", (e) => {
  playRound(e.target.id, getComputerChoice());
});


function playRound(humanChoice, computerChoice) {
  if (humanChoice === "choiceButtons") {
    return
  };
  let choices = ["Scissors", "Paper", "Rock"];

  if (humanChoice === choices.at(computerChoice - 1)) {
    humanScore++;
    resultMessage.textContent = `You win! ${humanChoice} beats ${choices.at(computerChoice)}`
  } else if (humanChoice === choices.at(computerChoice)) {
    resultMessage.textContent = `It's a tie! ${humanChoice} ties with ${choices.at(computerChoice)}`
  } else {
    computerScore++;
    resultMessage.textContent = `You lose! ${choices.at(computerChoice)} beats ${humanChoice}`
  }

  updateHands(humanChoice, choices.at(computerChoice));
  
  checkWinner();
}

function updateHands(leftChoice, rightChoice) {
  leftImage.setAttribute("src", document
           .querySelector("#" + leftChoice)
           .getAttribute("src"));
  
  rightImage.setAttribute("src", document.querySelector("#" + rightChoice)
            .getAttribute("src"));
  
  const leftResult = document.querySelector("#left-div p")
  const rightResult = document.querySelector("#right-div p")

  leftResult.innerHTML = `You won <span style="color: lightgreen">${humanScore}</span> times`
  rightResult.innerHTML = `The bot won <span style="color: red">${computerScore}</span> times`
}

function checkWinner() {
  if (humanScore === 5) {
    playButton.innerHTML = `You win! Congratulations!<p>Wanna play again?</p>`
  } else if (computerScore === 5) {
    playButton.innerHTML = "You lose...<p>Want to try again?</p>"
  } else {
    return
  }

  choiceButtons.style.visibility = "collapse";
  resultMessage.textContent = "";
  playButton.style.visibility = "visible";
  }

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
