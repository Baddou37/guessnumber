import { prompt } from "./prompt.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(`Welcome to the Number Guessing Game! 🎮
Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.
`);

console.log("Let's get started! 🚀");

function game() {
  const targetNumber = getRandomInt(100);

  let tentative = 0;

  function guessNumber() {
    tentative++;
    const userGuess = Number(prompt("Enter a number: "));
    console.log(`You entered: ${userGuess}`);
    if (userGuess < targetNumber) {
      console.log(`📉 You entered ${userGuess} and your prompt is too small.`);
      return guessNumber();
    } else if (userGuess > targetNumber) {
      console.log(`📈 You entered ${userGuess} and your prompt is too big.`);
      return guessNumber();
    } else if (userGuess === targetNumber) {
      console.log(
        `🎉 Congratulations! You guessed the correct number ${targetNumber} in ${tentative} attempts.`
      );
      return restart();
    } else {
      console.log("Please enter a valid number.");
      return guessNumber();
    }
  }

  guessNumber();
}

game();

function restart() {
  const playAgain = prompt("Do you want to play again? (yes/no): ");
  if (playAgain === "yes") {
    game();
  } else if (playAgain === "no") {
    return console.log("Thank you for playing! Goodbye! 👋");
  } else {
    console.log("Please enter a valid option.");
    restart();
  }
}
