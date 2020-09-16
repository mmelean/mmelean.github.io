// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    
 // return the length property of the string    
return string.length;

   
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    
// create new variable to hold data because strings cannot be altered 
// new data will be the original string changed to lower case
let newString = string.toLowerCase();
// return our new variable
return newString; 

    
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // create new varible to hold new string that has been made upper case 
let upperCaseString = string.toUpperCase();
// return the new variable
return upperCaseString; 



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
// make all words appear lower case with dashes in between them 
function toDashCase(string) {
    
//set string = to string with new changes 
string = string.toLowerCase().split(' ').join('-');
// make all words lower case as well 
// replace the spaces in the string with dashes by first splitting into separate words with .split and 
// then rejoin them into string with dashes inbetween each word using .join with dashes
return string;



    
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // use conditional statement to compare the first character in the string with char
    // make sure both are lower case so you can compare them exactly 
if(string[0].toLowerCase() === char.toLowerCase()){
    // if the string starts with the char then return true
    return true;
  // else return false  
}
return false;
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // complare the last letter in the string with char //
    // make them both lower case to compare them exactly
if(string[string.length - 1].toLowerCase() === char.toLowerCase()){
    return true; 
}
// if they are not the same return false
return false; 


    
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// using concat method combine the two strings 
let newString = stringOne.concat(stringTwo);
return newString; 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // simply add .join with no spaces so all arguaments will be joined
    var args = Array.from(arguments).join('');
    //return the final result
    return args;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// compare the length of both strings using the properties .length
if(stringOne.length > stringTwo.length){
    return stringOne;
    }
// provide 2 conditional statements to return whichever string is longer    
if (stringTwo.length > stringOne.length){
    return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // compare stringOne to stringTwo and return -1 if stringOne is greater in value
if(stringOne > stringTwo){
    return -1;
// return 1 if it is less in value 
}else if(stringTwo > stringOne) {
    return 1;
} else{
// set default to 0 if they are equal     
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // compare both strings , if the first string is lower in value return -1 //
if(stringOne < stringTwo){
    return -1;
// if it is higher in value return 1    
}else if(stringTwo < stringOne) {
    return 1;
} else{
//otherwise return 0 if they are equal    
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
