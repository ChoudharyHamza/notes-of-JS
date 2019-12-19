// the symbols in js are very unique to get a symbol we need to use Symbol() function

var sym = Symbol("test"); // the "test" is the description it as no significient values just a a label for our understanding

// now we have a symbol so what we want to now further is that every time we use the symbol even with
// same description it will always generate a different symbol it will never be the same

var sym1 = Symbol("test");
console.log(sym ==sym1); // give false

// now we mainly use symbols to be used along side the strings to be used as unique property identifiers

//  note symbols dont auto convert like when adding a string and a number it will need to use toString()
//  to convert into a string when we alert something it will first convert to string 
console.log(sym); // this will never give us a symbol why well it is not techinicaly a symbol so woll just give Symbol("test")