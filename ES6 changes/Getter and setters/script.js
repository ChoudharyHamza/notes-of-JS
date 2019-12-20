/* so in object there are two type of properties  
    one is data property
    one is accessor property
    we have seen that the data properties so now we need to know about accessor properties
        get and set is good example lets see

        let obj = {
        get propName() {
            // getter, the code executed on getting obj.propName
        },

        set propName(value) {
            // setter, the code executed on setting obj.propName = value
        }
        };

    */

    /* as we can see form the code above when we just want to call a function we use obj.propName
     and it is called and executed but when we want want to set some properties and not call it the we use 
     obj.propName = any thing; and it calls the setter one thing to note is that setter only takes one argument
*/
// also note that we can use only one type of propert either data property or the get/set note both at the same time or else congratz an error
// let see an example


let obj = {

    name : "Hamza",
    sName: "Mubeen",

    get printFullName (){
        console.log(`my name is ${this.name}  ${this.sName}`);
    },
    set printFullName(arr){
        [this.name, this.sName] = arr.split(" "); 
    }
} 


obj.printFullName;
obj.printFullName = "Dark Blaze";

obj.printFullName;