/*
    Creating a program that stores the number of correct answer. 
    When quiz begins, no answer are correct
*/

let correct = 0;


const answer1 = prompt("Which planet is closest to the sun?");
if (answer1.toLocaleLowerCase() === 'mercury'){
    correct+=1;
} 

const answer2 = prompt("What is the color of the sun ?");
if (answer2.toLocaleLowerCase() === 'yellow'){
    correct+=1;
} 

const answer3 = prompt("Who is the president of France ?");
if (answer3.toLocaleLowerCase() === 'macron'){
    correct+=1;
} 

const answer4 = prompt("In which city is the Eiffel Tower ?");
if (answer4.toLocaleLowerCase() === 'paris'){
    correct+=1;
} 

const answer5 = prompt("Which tech degree are you following ?");
if (answer5.toLocaleLowerCase() === 'treehouse'){
    correct+=1;
} 

// store the rank of the player
let rank;

if (correct === 5) {
    rank = "Gold";
} else if (correct === 3 || correct === 4){
    rank = "Silver";
} else if (correct === 1 || correct === 2){
    rank = "Bronze";
} else {
    rank = "None :(";
}

// select the main element, outputs results to the main element
const main = document.querySelector('main')
const message = `<h2>You got ${correct} out of 5 questions correct. </h2><h3>Crown earned: <strong>${rank}</strong> </h3>`;
main.innerHTML = message;
