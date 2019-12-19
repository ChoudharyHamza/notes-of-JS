// to understand the arrow functions lets have a few examples
var a = 10,b =20;

// in ES5 how we define a function and return a sum

function printsum1(a, b)
{
    return a + b;
}
console.log(printsum1(a, b));

// in ES6 using arrow function

/* when we use arrow function we simply replace the function statment with => and if we are returning something
 an it is a one line statement the we can also omit the return and curly brackets mostly arrow functions are used
for anonimiuos function so we have to use a function literal to store function*/
 

var printsum = (a, b) => c = a + b;
console.log(printsum(a, b));


// in es6 how we just simply print a varieble on  screen using function

function printvar(a)
{
    console.log(a);
}
printvar(a);

// in ES6
// we do not need the () when we use only one varieble and use paraenthisis when we do not need anything returned

var printvar1 = a => {console.log(a);}
printvar1(a);



// how to return an object literal in javascript
//in ES5

function Obj()
{
    return {
        name: 'hamza',
        lastName : 'mubeen'
    }
}

console.log(Obj());



// in ES6 arrow function  note: we encapsulate the object in () and it works fine and we do not need to use return

let Obj1 = () => ({name:'hamza', lastName:'mubeen'})
console.log(Obj1()); 



