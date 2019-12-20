
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

// class is like syntaxical sugar of function the parameters are passed in constructor
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
        // private props
        var religion = "islam";
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




/* a common concept what is private and public function or vairebles
    we can generally say that when we define a function/vareible in a way that it is accessable anywhere inside
    and outside its context/boundary(mostly curly brases) and can be modified it is called public function/method
    but we if define a function/ varieble in such a way that it is accessble inside its context/boundary only not
    ouside it will be called private functions. there is also another concept of priviliged function/variebles 
    and that is function/ varieble that has access to the private functions/ variebles and it itself is a public
    function.  


    so can we do the same thing in JS classes and function constructors 
    defning publicly:-  
                    every method/varieble that we define using this like "this.name = 'hamza' " becomes a 
                    props of an object and the object is returned so we can say that the context is created at 
                    the time of instance creation so we can say that the props of an object are public                             
    defining privately : - 
                            so every method that we define inside class or constructor without 'this' means that
                            those methods cn only we accessed inside that class an not outside the class so 
                            they are private
    defining shared :-      
                        so the methods we define in the prototype or outside the class constructor become the
                        shared props as they can be accessed by other classes 

*/

// now we now the fact that we can define methods is inside a constructor in JS by just







class one
{
    constructor(key)
    {
    this.key  = "key";
    }
    calc = ()=> {console.log(this.key)}
}

class two extends one
{
    constructor()
    {
        super();
        this.lname = "mubeen";
    }
    
}

var a = new two();
console.log(a.key);