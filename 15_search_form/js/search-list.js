

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let message;

function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }

if (search === "" || search === null || !onlyLettersAndSpaces(search)){
    message = `<p><strong>In stock:</strong> ${inStock.join(', ')}.</p>`;
} else {
    search = search.toLocaleLowerCase();
    if (inStock.includes(search)){
        message = `
            <p>Yes we have <strong>${search}</strong>. It's #${inStock.indexOf(search) +1} on the list !</p>
        `;
    } else {
        message = `
            <p>Sorry, we do not have <strong>${search}</strong>. </p>
        `;
    }
}


document.querySelector('main').innerHTML = message;



/*
There's another way you might write the product search without having to use includes() to check whether the inStock array includes a specific value. Remember, indexOf() returns the index of a given element inside an array, or -1 if it's not present.

First, pass the search value to indexOf(). In the else if clause, check if the product index is not -1. Then use the value of productIndex + 1 to display the product's number in the list:

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let productIndex;
let message;

if ( search ) {
  search = search.toLowerCase();
  productIndex = inStock.indexOf(search);
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( productIndex !== -1 ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${productIndex + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}
 */