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

// EXAMPLES OF STRING MANIPULATION: 
// changing letters to lower case using the toLowerCase() method 
let name = 'BOB'
let lowerCaseName = name.toLowerCase(); // this now makes 'BOB' change to 'bob' 

// you can replace a word in a string with string.replace() method by passing in the arguments of one word that you 
// want to replace with a second argument that is the word you want to replace it with  
let stringSentence = 'This is a great day';
let changedSentence = stringSentence.replace('great', 'bad');
console.log(changedSentence);  // this will print 'This is a bad day' to the console. 

// you can slice a portion out of a string with the slice method.  You will pass in a number indicatin where you want the slice to start(it starts after that index)
// and a second number to indicate where you want to stop(default is end of string).  When you set this function equal to another variable, that variable
// holds the sliced piece. 
let string22 = 'to one day be free';
let string23 = string22.slice(14); // so we are slicing the phrase above after index 14
console.log(string23); // 'free' 
console.log(string22); // 'to one day be free'.   The original is not altered. 

// NOTE:
// string.length is a way to access a property
// of a string.  This is not changing the 
// string, it is just giving us some information 
// about the string. 
