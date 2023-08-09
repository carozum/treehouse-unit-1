/*
    Collect a number from the user
    and give is a random integer between 1 and the random number.
*/

// Collect an integer from the user
const number1 = parseInt(prompt('Please enter a numer higher than 0.'));
const number2 = parseInt(prompt("Please enter a different number higher than 0."));

let message;

if (number1 && number2 && number1!== number2){
  let highNumber;
  let lowNumber;

  if (number1 > number2){
    highNumber = number1;
    lowNumber = number2;
  } else {
    highNumber = number2;
    lowNumber = number1;
  }

  const randomNumber = Math.floor(Math.random() * ( highNumber - lowNumber )) + lowNumber;
  message = `<h2>The random number between ${lowNumber} and ${highNumber} is ${randomNumber}</h2>`;

} else {
  message = "You need to provide 2 different numbers. Try again ";
}

// Display the random number
document.querySelector('main').innerHTML = message;
