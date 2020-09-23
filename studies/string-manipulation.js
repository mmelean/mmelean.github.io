/* 
* STRING MANIPULATION
* These are ways to alter strings. 
* NOTE: You need to save method alterations to a new 
* variable because strings are immutable 
* meaning the original cannot be changed. 
*/

// 1. With operators 
// One way to combine strings is with the + operator.
// This can be called string concatenation.
// You can thread strings together by simply adding
// them to one another. 
// EXAMPLE: 

var z = "Good" +' '+ "Morning" 

// Result =  Good Morning 
// This is because we added Morning to Good 
// and we added a space in between

// TEMPLATE LITERAL: 
// This is another way to add strings 
// using interpolation. 
// Use a back at the beginning and end.
// Then place each word in ${}
// EXAMPLE: 
var x = `${'Good'} ${'Night'}`

//RESULT =  Good Night 
// This can be a quicker way to list
// out combined strings implying 
// the + signs and spaces without 
// having to type them out.  


// 2. With string methods
// When you use a method on a string 
// you need to save it to a variable 
// if you want to preserve that alteration.
// EXAMPLE:
//
let word = "name";
let wordChanged = word.toUpperCase();

// RESULT:
console.log(word) // "name"
// If you console.log the word variable
// it is still just "name". 
console.log(wordChanged) // "NAME"
// But if you console.log the wordChanged 
// it will give you the word capitalized
// because it applied the toUpperCase method 
// to it.  

// NOTE:
// string.length is a way to access a property
// of a string.  This is not changing the 
// string, it is just giving us some information 
// about the string. 
