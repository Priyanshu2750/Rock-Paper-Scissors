function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  else if (choice === 1) return "Paper";
  else if (choice === 2) return "Scissors";
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice (Rock, Paper or Scissors)", "");
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
