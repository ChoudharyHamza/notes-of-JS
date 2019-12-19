

//rest parameters:

/*
    so generaly rest parameters are almost the same as spread opreator but have different function 
    rest parameters allows us to use an array storing all the parameters passed to the function totaly
    opposite to the spread opreator that allows use to divide an array into individual values whiling 
    calling the function.
*/

//  example

// so let us suppose that we have a function which accepts the ages of people at same time and returns true or false if they are adult or not


// ES5 

function isFullAge()
{
    // now each function has anobject to which we have acces it is called arguments
    console.log(arguments);
    // it is an array like structure but not an array so we need to convert it into an array
    var ages = Array.prototype.slice.call(arguments);
    // now it is an array
    console.log(ages);

    // now checking age and logging
    ages.forEach(element => { 
        console.log(element >=18 );
    });


}
isFullAge(23, 18, 12, 24, 36);

// ES6

// using the  resst opretor in the place of the parameter and all the parametr combine into an element
function isFullAge1(...arr)
{
    //since we already have an array lets get down to buissnes
    arr.forEach(element => {
        console.log( element >= 20);
    });

}

isFullAge1(23, 20, 19, 18, 25);






// now senario that the same program but we need to pass the age limit as well then what will the changes be
// using an IIFE because in block function name are not scope bound
(function(){

// ES5 
let limit = 20;
function isFullAge(limit)
{
    // now each function has anobject to which we have acces it is called arguments
    console.log(arguments);
    // it is an array like structure but not an array so we need to convert it into an array but since we do not need 
    // the first parameter then we will just skip it
    var ages = Array.prototype.slice.call(arguments,1);
    // now it is an array
    console.log(ages);

    // now checking age and logging
    ages.forEach(element => { 
        console.log(element >=limit );
    });


}
isFullAge(limit, 23, 18, 12, 24, 36);

// ES6

// using the  resst opretor in the place of the parameter and all the parametr combine into an element
// the thing is not mush of hassle just passed it along itthe rest turned into an array
function isFullAge1(limit, ...arr)
{
    //since we already have an array lets get down to buissnes
    arr.forEach(element => {
        console.log( element >= 20);
    });

}

isFullAge1(limit, 23, 20, 19, 18, 25);

})();
