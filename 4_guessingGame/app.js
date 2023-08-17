/*
    The Number Guessing Game 
    stores a number between 1 and 10 
    and gives a player one attempt to
    guess the number.
*/


// when the games begins, the guess is false
let correctGuess = false;
const number = 6; //number to guess
const guess = prompt('Guess a number between 1 and 10.');

/* 
    1. Test if a player's guess matches the number
    2. Change the value of correctGuess to true if they match
*/
if ( +guess === number ) {
  correctGuess = true;
} else if ( +guess < number ) {
  const guessMore = prompt(`Try again. The number is higher than ${guess}`);
  if ( +guessMore === number ) {
    correctGuess = true;
  }
} else if ( +guess > number ) {
  const guessLess = prompt(`Try again. The number is lower than ${guess}`);
  if ( +guessLess === number ) {
    correctGuess = true;
  }
}

// Test if guess is correct and output response
if ( correctGuess ) {
  console.log("You guessed the number!");    
} else {
  console.log(`Sorry. The number was ${number}.`);  
}