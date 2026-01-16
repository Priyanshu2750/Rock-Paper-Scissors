function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else if (choice === 2) return "scissors";
}

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    result.textContent =
      `It's a tie! You both chose ${computerChoice[0].toUpperCase()}` +
      `${computerChoice.slice(1)}`;
  }
  if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore++;
    result.textContent =
      `You win! ${humanChoice[0].toUpperCase()}` +
      `${humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase()}` +
      `${computerChoice.slice(1)}`;
  } else {
    computerScore++;
    result.textContent =
      `You lose! ${computerChoice[0].toUpperCase()}` +
      `${computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase()}` +
      `${humanChoice.slice(1)}`;
  }

  score.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;

  if (humanScore === 5) {
    result.textContent = "Congrats! You won the game.";
  } else if (computerScore === 5) {
    result.textContent = "Better luck next time! You lost.";
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
