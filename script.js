const prompt = require("prompt-sync")();
let wins = 0, losses = 0, ties = 0;
const choices = ["rock", "paper", "scissors"];

while (true) {
  const playerChoice = prompt("Enter rock, paper, or scissors, or type 'quit' to exit: ").toLowerCase();

  if (playerChoice === "quit") {
    break;
  } else if (!choices.includes(playerChoice)) {
    console.log("Please enter a valid choice: rock, paper, or scissors.");
    continue;
  }

  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomNumber];

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    wins++;
  } else {
    console.log("Computer wins!");
    losses++;
  }
}

console.log(`You won ${wins} times, lost ${losses} times, and had ${ties} ties.`);
console.log("Thanks for playing!");
