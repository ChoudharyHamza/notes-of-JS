

/* so some new array methods that where introduceed included

Array.from();
anyArray.find();
anyArray.findIndex();
for of method
*/

/* so first let us look at the Array.from method:-

 this method is used to fetch an array from a nodeList mostly as we now nodelist is not technically an array so we
  need an to convert it into array to use more easily we can use eit as it is but it will be time taking
 */


{
    // Array.from();
                // so the from method is used to take any varieble like string or node list and return an 
                //array from it.


    // so we have three divs and we want to access them all using queryselectorall but it returns a nodelist
    {
    // ES5
    let eles = document.querySelectorAll('.box');

    //so to convert the node list into a array the old hack
    let elements = Array.prototype.slice.call(eles);

    // then lets print the array
    console.log(elements);
    }
    

    {
    // ES6 using from funciton
    let eles = document.querySelectorAll('.box');

    //so to convert the node list into a array the old hack
    let elements = Array.from(eles);

    // then lets print the array
    console.log(elements);
    }
    


    //anyArray.find mehtod :-
                        // this m ethod returns the first element that passes a test(provided by a funcation)
                        // so we give a condition and if it is true it will  return that element

    // so  we have an array of all the divs in a varible and we want the element which is green then we can say that give me the element with the claas green

        {
            let eles = document.querySelectorAll('.box');

            //so to convert the node list into a array the old hack
            let elements = Array.from(eles);
            // now we to use the find function

            let theEle = elements.find(curr => curr.className == 'box green');
            console.log(theEle);
        }



    // anyArray.findindex:-  the same working as the find function but returns the index of the element
        {
            let eles = document.querySelectorAll('.box');

            //so to convert the node list into a array the old hack
            let elements = Array.from(eles);
            // now we to use the find function
            let theEle = elements.findIndex(cur => cur.className === 'box green');

            console.log(theEle);
        }




    // for of method for arrays:- just the same as the map and forEach loop but in those method we cannot break the loop
        // unitl the complete array has be sorted to be able to break and continue function we use the for of method
        // but but returns nothing its like a new type of loop just for arrays

        {
            // so we want to change all the boxes statement to blue beside the blue one
            // ES^
            let eles = document.querySelectorAll('.box');

            //so to convert the node list into a array the old hack
            let elements = Array.from(eles);

            // now using for of method
            for(const cur of elements)
            {
                
                if(cur.className === 'box blue')
                {
                    continue;
                }  
                cur.textContent = 'changed to blue';
                cur.style.backgroundColor = 'dodgerblue';
            }


        }



    
}