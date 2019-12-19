
/*
    //  SO maps were added in ES6 they are also called Hash Maps in javscript due to there similarity to hash tables
    //  maps lay somewhere between arrays and objects.
    //  In maps we can use same concept as objects of writing a property name and then assigning a value to it
        but the difference is that the key/property names can be anything at all like a number or string or  any
        primitive value or an object name or array. look at the example.
    //  the maps a iteratable like arrays and poccess .size property like length in arrays and forEach and forOf
        loops as well
    //  some common property of arrays 
    name.set():-  to add a key and a corresponding value to it 
                example:  name.set(key, value);
    name.get(key):-  is simply used to call a property/key just like objects
    name.size:- is used to get the sixe/length of the map.
    name.has(key):-  is used to search a map for a key and returns true or false.
    name.delete(key):- is used to delete a key
    name.clear():- clears a map meaning deleting all values
*/
// to define a map you need to use map constructuor there is no literal way
    const aMap = new Map(); //or simply     const  aMap = new Map({ (key, value), (key, value), (key, value) });
    
    // then lets add some values using the .set method
    aMap.set('question', 'what is the most popular langguage on stack overflow');
    aMap.set(1, 'javascript');
    aMap.set(2, 'python');
    aMap.set(3, 'swift');
    aMap.set(4, 'PHP');
    aMap.set('correct', 1 );
    aMap.set(true, 'your right');
    aMap.set(false, 'wrong try again');

    // now let us make a program to understand the usefullnes of Map 

    console.log(aMap.get('question'));
    // let us use the  for Each loop now in map for loop we have 'current value , current key' for function para
    aMap.forEach((value, key) => {
        if(typeof(key) === 'number')
        {
            console.log(`${key} : for ${value}`);
        }
    });

    // now lets prompt get input

    let ans = parseInt(prompt('your answer'));

    // adn compare the results and get an output based on answer true or false and advantage of name conventtions
    console.log(aMap.get(ans === aMap.get('correct')));


    // now lets look at some properties and methods

    console.log(`the size of map is ${aMap.size}`);

    console.log(aMap.has(3));

    // deletes the item and returns true yes deleted or falase no not found
    console.log(aMap.delete(3));





    // now important note what is meant by using objects and arrays as key names for object and map see example

{
    // creating two objects
    let a = { name : 'shelock'};
    let b = { name : 'holmes' };

    let obj = {};
    // then let us assign value to the obj using the varieables defined by using '[]' beacuse if we use . method then it 
    // will consider it string by default.
    let st ='hamza';
    let st1  = 'mubeen';

    // the reason it will not work is beacuse when we use obj[a] and here gives object and same with be
    obj[a] = 'doctor';  // it is considered as 'object' : 'doctor'
    obj[b] = 'watson';  // it is considered as 'object' : 'watson' so we just rewrited property object

    // it will not work with objects and you can try arrays will not work as well now go back to skiped line
    console.log(obj[a] + '   ' +obj[b]);

    obj[st] = 'doctor';  // it is considered as 'hamza' : 'doctor'
    obj[st1] = 'watson'; // it is consodered as 'mubeen' : 'watson'

    // but will work just fine with variebles
    console.log(obj[st] + '   ' +obj[st1]);



    // now lets see with a map it will work just fine 
    var anyMap = new Map;
    // with variebles 
    anyMap.set(st, 'doctor');
    anyMap.set(st1, 'watson');
    console.log(anyMap.get('hamza') +'  '+anyMap.get('mubeen') );

    // with object
    anyMap.set(a, 'doctor');
    anyMap.set(b, 'watson');
    console.log(anyMap.get(a) +'  '+anyMap.get(b) );
}