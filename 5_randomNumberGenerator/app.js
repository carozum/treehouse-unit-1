/*
    Collect a number from the user
    and give is a random integer between 1 and the random number.
*/

// Collect an integer from the user
const number1 = parseInt(prompt('Please enter a number higher than 0.'));
const number2 = parseInt(prompt("Please enter a different number higher than 0."));

let message;


/**
 * Returns a random number between 2 numbers
 * 
 * @param {number} lowNumber - the lowest number value
 * @param {number} highNumber - The highest number value
 * @return {number} The random number value.
 * 
 */

function randomNumber(lowNumber, highNumber){
  const randomNumber = Math.floor(Math.random() * ( highNumber - lowNumber )) + lowNumber;
  return randomNumber;
}

if (number1 && number2 && number1!== number2){
  let highNumber = Math.max(number1, number2);
  let lowNumber = Math.min(number1, number2);

  const randomNum = randomNumber(lowNumber, highNumber);   
  message = `<h2>The random number between ${lowNumber} and ${highNumber} is ${randomNum}</h2>`;

} else {
  message = "You need to provide 2 different numbers. Try again ";
}

// Display the random number
document.querySelector('main').innerHTML = message;
