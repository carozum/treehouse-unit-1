const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
const max = 5;
let message='';

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// guessing game
guess = parseInt(prompt("I am thinking of a number between 1 and 10. What is it ?"));

for  (let i=1; i< max; i++){
  if (!guess){
    break;
  } else if (guess === randomNumber){
    message = `You guessed the number. It was ${randomNumber}. It took you ${i} tries.`
    break;
  }
  else if (guess >10 || guess < 1){
    guess = parseInt(prompt("The number should be between 1 ans 10. Try again"));
  }
  else if (guess > randomNumber){
    guess = parseInt(prompt("Too high. Try again."));
  } else {
    guess = parseInt(prompt("Too small. Try again. "));
  }
 message = `If you had ${max} tries but can't guess the number. It was ${randomNumber}`;
}

// Display the final message
main.innerHTML = `
    <h1>${message}</h1>
  `;

main.insertAdjacentHTML(
  'beforeend',
  `<p> If you still want to play, refresh the page.</p>`) ;

