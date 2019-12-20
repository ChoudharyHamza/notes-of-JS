
// a block can be defined using simply {}

{
// the concept of const is simle

const firstName = 'hamza';

/* is not re-assignable
code commented out as it will give error so to check just remove the slashes*/

    // firstName = 'mubeen';


/* and it cannot be redeclared
code comment as it will give error so to check just remove the slashes*/
    //const firstName = 'mubeen';


}

/* const is blockscope bound 
code comment as it will give error so to check just remove the slashes */

    //console.log(firstNames);
    // a const needs to be assigned value and deckared at the same time

    // but when declared with const to store object or array we can change the values inside the array/object
    // but we cannot reassign   a new object or array to it
    const a = {a:"hamza", b:"mubeen"}
    a.b="jahangir";
    const ab;
    console.log(a);



// block scoping is same for the let statment the only difference is that it is re assignable

{
var firstName = 'hamza';


/* can be re-assignable*/

    //firstName = 'mubeen';


/* and it cannot be redeclared
code comment as it will give error so to check just remove the slashes*/

    let firstName = 'mubeen';

    console.log(firstName);
}

/* let is block scope bound 
code comment as it will give error so to check just remove the slashes */

    //console.log(firstNames);








