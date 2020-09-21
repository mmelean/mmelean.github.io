// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // given a string or number return an entire function
    // make a function that tests if the value is greater than base 
    return function(value){
        if(value > base){
    //return true if the value is greater than the base        
            return true;
        }else{
    // otherwise return false         
            return false; 
        }
    
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
//  base is a string or number //
// return a function that will test if a certain value is less than the base
return function(value){
// so if the value is less than the base return true    
    if (value < base){
        return true;
// otherwise if it's not then return false        
    }else{
        return false;
    }
};
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // return function that takes a string as a parameter //
    return function(string){
    // compare the first character in that string with startWith parameter which will be a character
    // make both sides lower case so you can compare them evenly
        if (string[0].toLowerCase() === startsWith.toLowerCase()){
    // if the string does start with the character return true     
            return true;
        }else{
    // otherwise return false        
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
 //return function that takes a string as a parameter
 
    return function(string){
// have the function compare the last character in the string with the endsWith parameter
// which is a single character. Make both items lower case so they can be compared
        if (string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
// if they are equal return true             
            return true;
        }else{
// otherwise return false             
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // create empty array to collect the modified data  //
    let alteredString = [];
    // use for loop to run through strings array 
    for( let i = 0; i < strings.length; i++){
    // apply the modify function to each item in the strings array and push that new 
    // item into the empty array
        alteredString.push(modify(strings[i]));
    }
    // finally return the new array with all the modified items
    return alteredString;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // use for loop to run through the strings array //
    for( let i =0; i < strings.length; i++){
    // check to see if there is running the test on these items is false then return false    
       if( !test(strings[i])){
    
        return false; 
       }
     // else return true because that means it went through entire loop without problems   
    }
    return true ;
 
     
    
    
  
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}