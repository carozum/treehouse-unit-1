
/**
 * Program that asked the user for their first and last name and return a string with the length of the full name
 */

const firstName = prompt("what is your first name ?");
const lastName = prompt("what is your last name ?");
const yourName = firstName.toUpperCase() + " " + lastName.toUpperCase();
const nameLength = yourName.length;

const message = `The string "${yourName}" is ${nameLength} characters long.`;
document.querySelector('main').innerHTML = `<h1>${message}</h1>`;