//To run this file, click in the Console below and type: node 1_create_array.js 
//You can clear the console by typing `clear` and pressing enter.
//If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.

const languages = ['JS', 'Python', 'Java', 'Ruby', 'C#', 'PHP', 'Swift'];
// length of the array
const size = languages.length;
console.log(size);
// First element
console.log(languages[0]);
// Last element
console.log(languages[size-1]);
// Add an element to the end
languages.push("CSS");
// Add an element at the BEGINNING
languages.unshift("HTML");
// all the elements of the array as a string
console.log(languages.join(', '));

// remove last element
languages.pop();

// remove first element
languages.shift();
console.log(languages);

// all the elements of the array as a string
console.log(languages.join(', '));


for (let i = 0; i< languages.length; i++){
    console.log(languages[i]);
}

