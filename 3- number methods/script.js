// all the number methods

// number.string returns the number converted into string

var num = 23;
console.log(typeof num.toString());

//number.exponential returns a string rounded and written in exponential form

var exp = 12.345

console.log(exp.toExponential(2));
console.log(exp.toExponential(1));

// number.fixed returns the string rounded to a fixed decimal value 

console.log(exp.toFixed(2));
console.log(exp.toFixed(0));

// number.toPrecison returns a string with fixed length after decimal

console.log(exp.toPrecision(5));
console.log(exp.toPrecision(2));

// method to convert string into numbers

var srn = '120.3';

// Number() returns a number from a string will ignore any space and also if between two numbers will give nan

console.log(typeof (Number(srn)));

// parseInt() takes a string and returns a number if in decimal rounded up to whole value

console.log(parseInt(exp));

// parseFloat() converts a string into a number with decimal points 

console.log(parseFloat(srn));






// now number object has  a few properties associated with it like given below and these properties only belong
// number wrapper in javascript
// MAX_VALUE returns the maximum umber possible in javascript
console.log(Number.MAX_VALUE);

// MIN_VALUE  returns the smallest value possible in javascript
console.log(Number.MIN_VALUE)







con();

function con()
{
console.log('hamza');
}

var con1 = function()
{
    console.log(srn1)
}

let srn1= "srn";


con1();