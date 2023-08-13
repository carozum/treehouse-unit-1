alert("Let's do some math!");

const number1 = parseFloat(prompt("Please type a number"));
const number2 = parseFloat(prompt("Please type another number"));
let message;

if (number1 && number2 ){

    message = `
        <main>
            <h1>Math with the numbers ${number1} and ${number2}</h1>
            <p>${number1} + ${number2} = ${number1 + number2}</p>
            <p>${number1} * ${number2} = ${number1 * number2}</p>
            <p>${number1} / ${number2} = ${(number1 / number2).toFixed(2)}</p>
            <p>${number1} - ${number2} = ${number1 - number2}</p>
        </main>
        `;
        document.querySelector('body').innerHTML = message;    
    
} else {

    if (number2 === 0){
        alert("The second number is 0. You can't divide by 0. Reload and try again.");
        throw Error("division by 0");
    
    } 
    
    if (number1 === 0 && number2 ){
        message = `
        <main>
            <h1>Math with the numbers ${number1} and ${number2}</h1>
            <p>${number1} + ${number2} = ${number1 + number2}</p>
            <p>${number1} * ${number2} = ${number1 * number2}</p>
            <p>${number1} / ${number2} = ${(number1 / number2).toFixed(2)}</p>
            <p>${number1} - ${number2} = ${number1 - number2}</p>
        </main>
        `;
        document.querySelector('body').innerHTML = message;
    
    } else {
        alert("At least one of the values you type is not a number. Reload and try again.");
        throw Error('You have to enter 2 numbers');

    }
    
}



