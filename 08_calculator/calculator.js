const add = function(firstNumber,secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber,secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numberArray) {
  if(numberArray.length==0) return 0;

	let sumOfNumbers = numberArray[0];

  for(let i=1; i<numberArray.length; i++) {
    sumOfNumbers += numberArray[i];
  }
  return sumOfNumbers;
};

const multiply = function(numberArray) {
  if(numberArray.length==0) return 0;

  let resultOfNumbers = numberArray[0];

  for(let i=1; i<numberArray.length; i++) {
    resultOfNumbers *= numberArray[i];
  }
  return resultOfNumbers;
};

const power = function(firstNumber,powerNumber) {
	let resultOfPower = 1;

  for(let i=1; i<=powerNumber; i++) {
    resultOfPower *= firstNumber;
  }
  return resultOfPower;
};

const factorial = function(factorialNumber) {
  if (factorialNumber == 0) return 1;

  if(factorialNumber == 1 || factorialNumber == 2) return factorialNumber;
  
  let resultOfFactorial = factorialNumber;
  for(let i=factorialNumber-1; i!=0; i--) {
    resultOfFactorial *= i;
  }
  return resultOfFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
