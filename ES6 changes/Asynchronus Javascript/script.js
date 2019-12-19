


/*
   so up until this point we have been executing javascript on synchronus way meaning each
   line is run in a sequence  but there is also asynchronus javascript meaning you can execute
   a piece of code after a certain time and the rest of the code is executed without any trouble 
   and after the time is up the the specified code left unexecuted will be executed
*/

// for example lets print to messages tp the console

// synchronus
{
const second = () =>
{
    console.log('this is the second');
}

const first = () =>
{
    console.log('hey there');
    second();
    console.log('end');
}

// so lets execute the code and lets see
first();
}

// now lets execute the same code for asynchronus javascript

const second  = () => {
    setTimeout(() => {
        console.log('this is second');
    }, 2000);
    
}

const first = () =>
{
    console.log('hey there');
    second();
    console.log('end');
} 


// now execute the code for the second part

first();


/*  so the second function has a timer satatement so when the code is executed the timer
    is set to 2 second and the callback function is set along with it th eengine executes
    the rest of the code and after the 2 seconds are the code for the callback function is
    executed

*/