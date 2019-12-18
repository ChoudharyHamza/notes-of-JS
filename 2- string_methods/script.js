// all the string methods

// string.lenght returns the length of the string

var srn = "a crazy world with crazy ideas and thoughts";
console.log("length of the string "+srn.length);

// string.indexOf returns the starting index number of the first match found string 

console.log(srn.indexOf('crazy'));

// string.lastIndexOf() returns the starting index of the last found matching string

console.log(srn.lastIndexOf('crazy'));

// string.search searches the string and returns the index of the starting match string found

console.log(srn.search('world'));

// so the question often arrives is that indexOf and search are the same thing but no
// why well 2 reasons 
// indexOf is not usable when dealing with long strings
// search do not accept a second parameter of from where to start search.