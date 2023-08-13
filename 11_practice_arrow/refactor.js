const multiplyByTen = num => 10 * num;

// This function is the shortest as it can be
const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

const addUs = (num1, num2) => console.log(num1 + num2);


function getRandomNumber(upper){
	return Math.floor(Math.random() * upper) + 1;
}
let counter = 0;
while (counter < 10){
	counter += 1;
	console.log(getRandomNumber(100));
}