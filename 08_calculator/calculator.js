const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr = [0]) {
  let total = 0;
	for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr = [0]) {
  let total = 1;
  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(num, esponent) {
	return Math.pow(num, esponent);
};

const factorial = function(num) {
	let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
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
