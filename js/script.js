
// A function that adds two numbers



var number1 =parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

var add = function(){ alert (number1+ number2)}


add();



// A function that multiplies two numbers input from command prompt

var multiply = function(number1, number2){ return number1*number2;
};
var number1 =parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

alert (multiply(number1, number2));


var subtract= function(number1, number2){ return number1-number2;
};
var number1 =parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

alert (subtract(number1,number2));


// A function that gets modulo of the first and second number


var getModulo = function(number1, number2){ return number1%number2;
};
var number1 =parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

alert (getModulo(number1, number2));
