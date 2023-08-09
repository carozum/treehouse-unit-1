const adjective = prompt("Please type an adjective.");
const verb = prompt("Please type a verb.");
const noun = prompt("Please type a noun.");


const message = `<p>There once was a ${adjective} programmer who wanted to use Javascript to ${verb} the ${noun}</p>`;

document.querySelector("main").innerHTML = message;