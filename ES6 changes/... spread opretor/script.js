/* spread opretor is a new functio added into the JS in ES6
   it allows us to spread/ seprate the elements of an array into individual value
   very similar to the rest opreator just that it is used when we call a function to pass an array
    in the place of parameters very handy and convinient.
    */

// examples or uses

{
  // used to seperate the values of an array
  let arr = [1998, 1990, 1973, 1965];
  console.log(...arr);

  // can be used to combine two different arrays and also add somevalue between them

  let arr1 = [1997, 1996, 1974, 1962];
  let myAge = "1999";
  let arr2 = [...arr1, myAge, ...arr];
  console.log(arr2);
}

// the spread oprator is not only used for arrays but it is also used on objects how let see

const name = {
  firstName: "Hamze",
  secondName: "mubeen"
};

const address = {
  city: "Lahore",
  country: "pakistan"
};

// so now letss use the spred operator on the objects and we can also add new properties on the go

const combined = { ...name, ...address, contact: 0300 };
console.log(combined);

// but the most common use is to pass an array for all the parametes of a function when we call it
{
  {
    //ES5
    // define the array  to pass
    let ages = [18, 23, 25, 16, 17];

    function calcAge(a, b, c, d) {
      return a + b + c + d;
    }
    // we now about the apply function it passes an array as parameter for all the parameters of the function
    let sum = calcAge.apply(null, ages);
    console.log(sum);
  }

  {
    // ES6
    let ages = [18, 23, 25, 16, 17];

    function calcage(a, b, c, d) {
      return a + b + c + d;
    }

    let totalAge = calcage(...ages);
    console.log(totalAge);
  }
}
