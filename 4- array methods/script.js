// all array usefull methods that are used with arrays

var arr = [2,3,4,78,5,4,32];

// push method for arrays enters a value into the array

arr.push(10);
console.log(arr);

// pop method is just to remove the last added element from the array
 arr.pop();
 console.log(arr);

// shift removes the first element rather then the last
arr.shift();
console.log(arr);

// unshift adds a new element to the array at the start and shifts the other elements ahead

arr.unshift(22);
console.log(arr);

// delete removes an element from the array at  the specified index but places undefined at its place


// splice method is used to add and remove elements from the array.

/*
The first parameter (1) defines the position where new elements should be added/removed (spliced in).

The second parameter (2) defines how many elements should be removed.

The rest of the parameters ( 4) define the new elements to be added.

The splice() method returns an array with the deleted items:
*/
arr.splice (1, 2, 4);
console.log(arr);


// slice method is used to slice a part of an array and return it as a new array
// it can take 2 paramters first index the start position second tells the end position not included 
// vbut the original array stays the same

console.log(arr.slice(4,5));
console.log(arr);


// so there are sort and reverse methods that are used to sort array and they effect the original array
// but these 2 methods are pretty good when we want to sort by strings but when sorting with number it
//  does not yield right values


console.log(arr.sort());

// but to sort it according to numbers there is a way and that is given

// for ascending order
var arr1 = arr.sort(function(a,b){return a-b});
console.log(arr1);

// for descending order
console.log(arr.sort((a,b) =>  b-a));

// 