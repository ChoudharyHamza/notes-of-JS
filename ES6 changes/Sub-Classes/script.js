


/*
    so we have learned about classes now how can one class can inherit from another class and be
    called its sub classes by inherit we mean prototype as well as the inheritance of an objects 
    own properties we have seen the prototype part lets see the other one.   
*/


// so lets first see how do we make one object inherit from another totaly unrelated object

// in ES5


// so first lets define a function constructor

function Person(name, dateOfBirth, job)
{
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
    this.calcAge  = function()
    {
        return new Date().getFullYear() - this.dateOfBirth
    }
}
// then a prototype property
Person.prototype.print = function(){console.log(this.calcAge());}

// then the constructor that needs to inherit the above constructor

function Athelite(name, dateOfBirth, job, partiGames, medals)
{   
    /*
        // if we want the personal properties of a constructor to also be part of current function
          then we use following

        //  we use 'this' because we want them to be part of current object or we can define them in th
            prototype of  that object but that will give there access to other objects that might also be
            inheriting the parent object but we dont want that

        // this satetment will allow the athelite constructor to have the all properties of the
           Person constructor. if not all the parameters for all the propertie of the parent object
           are defined then the left one will be set to undefined

    */
   
    Person.call(this, name, dateOfBirth, job);
    this.partiGames = partiGames;
    this.medals = medals;
}

/* 
    what we have accomplished so far is that the Athelete will have the properties of the 
    Person but it will not have prototype property of the Person which is the turue inheritance
    we can accomplish that by follow

    in the following statement the Object.create() creats a new object and new  object's 
    prototype will be the the Person objects prototype and then that object will be the prototype
    of the athelte object the statement is confusing no doubt.

    if we write Person then it will be a blunder beacuse it is a constructor not an object and
    all the the peroperties inside it are still undefined but if we pass a created object then
    it will take all the properties of that object into ints prototype part but not the given
    object prototype.
    
    note that we are replacind the prototype property of the Athelite not adding if we are adding
    then we will use prototype.name but we are using prototpe and one more thing that prototype 
    property in natue is also an Object

    now you might think of doing 'Athelite.prototype = Person.prototype' but it will work but it is not recommeneded 
    well why first becuase it will inherit it directly and will not say its parent is the Person 
    and that it will also take its constructor which is useless code attached and not needed.

*/

    Athelite.prototype = Object.create(Person.prototype)
    Athelite.prototype.greeting = () => {console.log('good day! ');}

    var jhonAthelite = new Athelite('jhon', 1990, 'swimmer', 4 , 1);

    jhonAthelite.print();
    jhonAthelite.greeting();











    // now lets do the same thing in the ES6 using the classes
// define class
class Person1
{
    // define the constructor of the class
    constructor(name, dateOfBirth, job)
    {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.job = job;
        this.calcAge = function()
        {
            return new Date().getFullYear() - this.dateOfBirth
        }
    }

    // define the to be inherited properties individualy
    print()
    {
        console.log(this.calcAge());
    }
}


// now the part where we need to connect the two constructors prototype is done right her 
// the extends keyword is used of all that hassel
class Athelite1 extends Person1
{
    // first constructor
    constructor(name, dateOfBirth, job, partiGames, medals)
    {
        super(name, dateOfBirth, job);
        this.partiGames = partiGames;
        this.medals = medals;
    }

    // prototype properties
    greeting()
    {
        console.log('good day!');
    }
    lastName(lastName)
    {
        this.lastName = lastName;
    }
}
    
// and thats it easy right

var jhonAthelite1 = new Athelite1('jhon', 1990, 'swimmer', 4 , 1);

jhonAthelite1.print();
jhonAthelite1.greeting();










