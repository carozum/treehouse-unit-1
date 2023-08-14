let html = '';

/**
 * @returns {number} random number between 0 and 255
 */

function randomValue(){
    return Math.floor(Math.random() * 256);
}

/**
 * @param {function} value - function that returns a value
 * @returns {string} a random color as RGB value
 */

function randomRGB(value){
    return `rgb( ${value()}, ${value()}, ${value()} )`;
}


for (let i=1; i<=10; i++){
    html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}


document.querySelector('main').innerHTML = html;