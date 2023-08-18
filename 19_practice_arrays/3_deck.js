
/**
 * takes an array of elements and shuffles their order in the array
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param {array} arr 
 * @returns {array}
 */

function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

/**
 * @return {array} multidimensional array with 2 elements arrays
 */

function createDeck() {
  const suites = ['♠︎','♣︎','♥︎','♦︎'];
  const ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];

  const deck = [];
  for (let i=0; i < suites.length; i++){
    for (let j=0; j< ranks.length; j++){
      const card = [ranks[j], suites[i]];
      deck.push(card);
    }
  }
  
  return deck;
}

const myDeck = shuffle(createDeck());
for (let i=0; i <myDeck.length; i++){
  console.log(`${myDeck[i][0]} of ${myDeck[i][1]}`);
}

