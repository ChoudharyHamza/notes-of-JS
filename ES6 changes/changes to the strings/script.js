//// strings changes in ES6 

// template litterals

// in ES6
let firstName = 'hamza';
let lastName = 'mubeen';
fullName  = `${firstName} ${lastName}`;
const dateOfBirth = 1990

function calAge()
{
    // using backticks to tell where the string starts and where it ends and using the ${} to tell this is a code
    return `age ${2019-dateOfBirth}`;
}

// using backticks to tell where the string starts and where it ends and using the ${} to tell that 
// anything between it is a piece of code
console.log(`my name is ${firstName } ${lastName} and i am almost of ${calAge()}`);

// some new functions in the js for the strings

// a function to check that weather a string starts with the known words and returns a boolean
let ans = firstName.startsWith('ha');
console.log(ans);

// a function to check that weather a string ends with the knownw words and returns a boolean
console.log(lastName.endsWith('en'));

// a function that tells wether a specific character word or number is in the string even space
console.log(fullName.includes('za mu'));
console.log(fullName.includes(' '));

// a function to repeat a string many time over
console.log(fullName.repeat(5));

// for space 
console.log(`${fullName} `.repeat(5));

