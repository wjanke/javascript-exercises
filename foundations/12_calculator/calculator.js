const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((total,current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product,current) => product * current, 1)
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	fact=1;
  for (i=1; i<=n; i++) {
    fact *= i;
  }
  return fact;
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
