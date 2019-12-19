

// so in javascript we can call a function without specifing all of its parameters so the rest of the parameters will
//  have value undefined but we can give them default or preset values 

// so lets see  how we can do that in ES5 as follow
/*
function SmithPerson(name, dateOfBirth, lastName, nationality)
{
    lastName === undefined ? lastName = 'smith' : lastName = lastName;
    nationality === undefined ? nationality ='england' : nationality = 'england'; 
    this.firstName = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
}

var jhon = new SmithPerson('jhon', 1998);
let emma = new SmithPerson('emma', 1992);
*/

// now in ES6

function SmithPerson(name, dateOfBirth, lastName = 'smith', nationality = 'england')
{
    this.firstName = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
}

var jhon = new SmithPerson('jhon', 1998);
let emma = new SmithPerson('emma', 1992, 'diaz', 'spanish');s