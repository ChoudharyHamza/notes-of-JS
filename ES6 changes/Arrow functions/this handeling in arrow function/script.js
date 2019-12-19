/*so in javascript each function call gets a this value and any 'this' keyword used in a method will refer to the 
   object calling that function/method but when we define a function inside the method it will be a regular function
   call rather then a method call it will refer to the global object*/

// note : every regular functon call the this keyword refers to the global objectthis key  word in it will 
//        point to the global object if the object is defined int he global object
// note : if we use the arrow function to define a method then the 
 
// defining a object
var obj = {

    // defining a property
    name:'hamza',

    // defing a metod
    callback : function(){

        //displaying the property of the current object using this keyword
        console.log(this.name);

        //using a hack to save the value of this so it can be used later
        let self = this;
        
        // calling a regular function in the mehtod and its this will refer to the global object so we use the hack
        // cause when we use  this it will give undefined
        function call1(){
            console.log(self.name);}
        call1();

    } 
}

// calling the method
obj.callback();





/* the arrow functions are almost similar to the function but the difference is the they do not get there
   own this keyword value rather the old one is used so if we call a arrow function in a method it will perserve
   the value of this*/

 
// defining a object
var obj = {

    // defining a property
    name:'hamza',

    // defing a metod
    callback : function(){

        //displaying the property of the current object using this keyword
        console.log(this.name +' ES6');

        
        // so we change the function into an arrow function so let see what happens

        let call1 = () => {console.log(this.name +' ES6');}
        call1();

    } 
}
// calling the method
obj.callback();




