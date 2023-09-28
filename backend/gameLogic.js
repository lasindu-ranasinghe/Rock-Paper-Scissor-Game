const readline = require("readline");

let userWinningCount = 0;
let computerWinningCount = 0;

const choices = ["rock", "paper", "scissor"];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function compareChoices(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("You win!!");
    userWinningCount++;
  } else if (userChoice === computerChoice) {
    console.log("Draw. Try Again!!");
  } else {
    console.log("You Lose!!");
    computerWinningCount++;
  }
}

function displayResults() {
  console.log("\nGame over!!!!");
  console.log("Your score:", userWinningCount);
  console.log("Computer score:", computerWinningCount);
  if (userWinningCount > computerWinningCount) {
    console.log("############# YOU WIN THE MATCH ##############\n");
  } else {
    console.log("############# COMPUTER WINS THE MATCH ##############\n");
  }
}

function playRound() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("What is your decision? ", (userGuess) => {
    const computerGuess = getRandomChoice();

    console.log("Your Guess:", userGuess);
    console.log("Computer Guess:", computerGuess);

    compareChoices(userGuess, computerGuess);

    if (userWinningCount === 3 || computerWinningCount === 3) {
      displayResults();
      rl.close();
    } else {
      console.log("");
      playRound();
    }
  });
}

playRound();
