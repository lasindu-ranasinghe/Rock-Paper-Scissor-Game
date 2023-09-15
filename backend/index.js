const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
while (true) {
  rl.question("What is your decission? ", (guess) => {
    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === 1) {
      var computerGuess = "rock";
    } else if (randomNumber === 2) {
      var computerGuess = "paper";
    } else if (randomNumber === 3) {
      var computerGuess = "scissor";
    }

    const myTimeout = setTimeout(() => {
      console.log("Your Guess :", guess);
      console.log("Computer Guess :", computerGuess);
    }, 3000);

    rl.close();
  });
}
