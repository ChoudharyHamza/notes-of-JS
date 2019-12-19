

// so destructuring is that we can assign the values in an array or object to the variebles bet in a much easier manner

// using block so that we dont have to define a series of variebles
{
    // we want to assign values to the vareble of an array
    // in ES5

    let arr = ['hamza', 22, 100];

    let name1 = arr[0];
    let age1 = arr[1];
    console.log(name1 + ' ' +age1);

    // in ES6 using destructuring 
    // note that when we are assigning the values of an array we use '[]'  and '{}' when we are assigning the value of an object
    // when using arrays with more values then we need just give the varibels up to value we need but we can only
    // access them in order not randomly 
    const [name, age] = arr;

    console.log(name +' '+age);
}


{
// when we are using an object and want to assign the values of the object to vareibles
// in ES5

let obj = {
    name : 'hamza',
    age : '22',
    lastname : 'mubeen'
};

let name1 = obj.name;
let age1 = obj.age;

console.log(name1 +' '+age1);


// in ES6 using destructuring and we can aviod using the properties that we do not 
// again note that when  we are assigning the values of an object we use '{}' and '[]' when array
/* important note when assigning the values of an object the name of the vairbles need to be as same as property names.
   and we can aviod using the properties that we do not need by only giving the names of the properties that we need*/
 
let {name, age} = obj;
console.log(name +' '+age);

// but we can chnge the names in the following way and 'a' 'b' are the new names

let {name : a, age : b} = obj;
console.log(b +' '+a);

}


// an example:

// we define an object
const obj = {
    name : 'hamza',
    age:21
};

// define a function using the arrow function
// in the parameter field i am using destructuring and i  am passing the object when calling the element
let printName = ({name, age}) => { console.log(`my name is ${name} and i am almost ${age} year old`);}

printName(obj);















