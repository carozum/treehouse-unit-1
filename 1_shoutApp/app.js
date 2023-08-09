const shout = prompt("What do you want to shout ?");
const shoutUpper = shout.toUpperCase();
const message = `The message to shout is: ${shoutUpper}!!!`;
const HTMLmessage = `<h1>The message to shout is: ${shoutUpper}!!!</h1>`;
document.querySelector("main").innerHTML = HTMLmessage
//document.querySelector("main").textContent = message;