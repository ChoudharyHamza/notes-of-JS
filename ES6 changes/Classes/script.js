
/*
     so in ES6/Ecmascript 2015 classes were intoduced so what are classes exactly
     first and foremost classes are just a syntaxical sugar meaning that the they do not 
     provide any new type of feature they just that they help in defining the function 
     construvtor in better way
*/

// so how we define a funtion constructor in javascript

// ES5
// lets make function
function Person(name, dateOfBirth, job)
{
    // we define the general properties or simiply variebles first
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;

    // and then any methods 
    this.calcAge = function(){ return new Date().getFullYear() - this.dateOfBirth;}
    
}

// and then we can add any protype method or property that we want to instances created from 
// this constructor to inherit

Person.prototype.print = function() {console.log(this.calcAge());}

let jhon = new Person('jhon', 1998, 'mechanic');
jhon.print();

console.log(new Date().getFullYear());


// now lets write the same code in ES6 using classes

// class is like syntaxical sigar of function the parameters are passed in constructor
class Aperson
{
    
    // in clases we define the properties the constructor

    // the constructor defines the constructor part of the object any other besides constructor
    // is considered prototype property

    constructor(name, dateOfBirth, job)
    {
        // so lets define the simple properties first 
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.job = job;
        
        // then methods 
        this.calcAge = function()
        {
            return new Date().getFullYear() - this.dateOfBirth;
        }
    }

    // and then we define the prototype properties
    // note: there is no seperation between the methods meaning no comma or semi colon like  in object

    print() {
        console.log(this.calcAge());
    }

}

let jane = new Aperson('jane', 1996, 'banker');

jane.print();





