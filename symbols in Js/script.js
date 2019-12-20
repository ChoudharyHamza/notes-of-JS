// the symbols in js are very unique to get a symbol we need to use Symbol() function

var sym = Symbol("test"); // the "test" is the description it as no significient values just a a label for our understanding

// now we have a symbol so what we want to now further is that every time we use the symbol even with
// same description it will always generate a different symbol it will never be the same

var sym1 = Symbol("test");
console.log(sym ==sym1); // give false

// now we mainly use symbols to be used along side the strings to be used as unique property identifiers

//  note symbols dont auto convert like when adding a string and a number it will need to use toString()
//  to convert into a string when we alert something it will first convert to string 
console.log(sym); // this will never give us a symbol why well it is not techinicaly a symbol so will just give Symbol("test")

/* there can be two types of symbols
 system symbols
 golbal symbols
 */

// global symbols :-
            /* there exist some already predefined symbols with predefined names so when we want a symbol to be 
                accessed everywhere we want the we need to use global symbols for this we need to use following symtax */   
                    var idSym = Symbol.for("id");/* this will check the golbal symbols for the name id if there is it will
                                                    get it but if not it will create it and place in among others in the
                                                    global registery 
                                                                        */

        // there is another method as well that does the reverse returns a name for global symbols
        // its Symbol.keyFor(symbol);

// system symbols :- are used by javascript internaly we can use them to fine tune our JS






////


function Con(a,b){

    this.age = a;
    this.birthday = b;
     this.calcAge = () => 2019-this.birthday

}

var conCalma = new Con(21,1999);
console.log(conCalma.calcAge());