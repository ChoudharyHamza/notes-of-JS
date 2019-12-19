// so in javascript the this keyword holds a lot of value the value if this can be very
// difficult to understand let su take an example

const obj = {
  name: "hamza",
  print() {
    console.log(this.name);
  }
};

// so when we call the function
obj.print();

// now lets do a little trick
const code = obj.print;

// and call it
code();

/* 
    and call it ... it will give nothing as when not in strict mode(in strcut mode will give
    undefine) the following code will assume that the given function is part of the global 
    object and call it from there so 'this' in the function will also point to the global object
    why because we passed the code to the varieble not a link to the original method
    (it only happens when we pass the objects itself as objects are not copied). 
    so this points to global and there is no name property in global scope so how
    to deal with this porblem well for this have this like call apply and bind functions
*/

/* we can use call function for one time use only if we want to use the method again we need tp use
 call again*/

// so we use bind function

const code1 = obj.print.bind(obj);

// now when ever this function will be called it will have the this keyword binded to Person object
code1();
