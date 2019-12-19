// ther many ways to loop through arrays

/*

forEach loop
for of loop
for in loop used for objects but works wel woth arrays as arrays are object as well
and simply for loop
map methods used a lot so lets include it
*/


// forEach loop 

arr = [2,5,8,2,5,1,4,9,6,8];

// so for Each executes a function for each element in the array simple as that and returns undefined
// the called function in the foreach loop can get three parameters the element its index and the whole arr itself
arr.forEach((item,index,arra) => console.log(item+' '+index+' '+arra));


// for of loop is sed to iterate over any kind of iteratable vareible in JS it travers values not keys unlike for in

for( let item of arr)
{
    console.log(item);
}

// for in loop is useful for array like objects that can use both index and other strings tp access element
// it is not recommended to use the for in  loop as it is slower then the others the for in loops travers keys
for(let item in arr)
{
    console.log(item);
}

// map method was added in ES6 it performs the same function as the forEach loop just that it returns an 
// array so when we need to perform opreation on a array and get a new array in return we use map


 var arr1 = arr.map(item => item - 2);
 console.log(arr1);
