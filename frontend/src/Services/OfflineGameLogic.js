const choices = ["rock", "paper", "scissor"];

async function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(choices[randomIndex]);
  return choices[randomIndex];
}

function compareChoices(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("You win!!");
    return "win";
  } else if (userChoice === computerChoice) {
    console.log("Draw. Try Again!!");
    return "draw";
  } else {
    console.log("You Lose!!");
    return "lose";
  }
}

function playRound(userGuess, computerGuess) {
  console.log("Your Guess:", userGuess);
  console.log("Computer Guess:", computerGuess);

  const result = compareChoices(userGuess, computerGuess);
  return result;
}

module.exports = { playRound, getRandomChoice };
