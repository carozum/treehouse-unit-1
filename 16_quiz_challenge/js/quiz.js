
const questions = [
  ["How many planets are in the Solar System?", '8'],
  ["How many continents are there?", '5'],
  ["How many legs does an insect have?", '4'],
  ["What year was JS created?", '1995']
]

let correct = 0;
let correctResponses = [];
let incorrectResponses = [];


function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0]} - ${arr[i][1]}</li>`;
  }
  return items;
}


for (let i =0; i < questions.length; i++){
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  if (response === answer){
    correct ++;
    correctResponses.push([question, answer]);
  } else {
    incorrectResponses.push([question, answer])
  }
}


document.querySelector('main').innerHTML = `
  <h1>You got ${correct} question(s) correct.</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correctResponses)}</ol>
  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(incorrectResponses)}</ol>
`;
