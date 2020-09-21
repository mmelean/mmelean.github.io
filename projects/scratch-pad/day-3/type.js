// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
// create conditional statement to check if the value is an array
// you cannot use type of because it will return object 
    if (Array.isArray(value)){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // create conditional statement to check if value is an object //
    // first rule out other items that can return as objects like Array,null and Date
    // and return false for those items 
    if(Array.isArray(value)){
        return false;
    }else if(value === null){
        return false;
    }else if(value instanceof Date) {
        return false;
    // then using type of to test value if it is an object return true     
    }else if (typeof value === 'object'){
        return true;
    // create final false return for outliers that may not fall into these categories    
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    //check to see if the value is an array or a collection type object //
    //use array.isArray to check for array and return true if it is an array
    
    
    if(Array.isArray(value)){
        return true;
    // sort out if value is null because that also can return as an object  to return false   
    }else if (value === null){
        return false;
    // and for date     
    }else if (value instanceof Date){
        return false;
    // then if typeof returns object return true    
    }else if (typeof value === 'object'){
        return true;
    // include a final return false for all other outliers     
    }else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // evaluate if it is an array to return "array" //
    if(Array.isArray(value)){
        return "array";
    }else if (value === null){
    // if it's null to return "null"
        return "null";
    }else if (value instanceof Date){
    // and if it's date to return "date"    
        return "date";
    }else {
    // otherwise just return appropriate type of value which will be a string     
        return typeof value;
    
    }  
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
