// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to iterate through all vallues in the array
  for(let i = 0; i < array.length; i++){
  // print each item as it loops through it 
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // use for loop starting from the end and looping backwards 
  for( let i = array.length -1; i >= 0; i--){
  // print these values as they loop through to get the results in reverse   
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // create empty array to hold object keys
  let objectArray= [];
  // use for in loop to iterate through object items 
  for( var key in object){
  // push only the keys onto the empty array 
    objectArray.push(key);
  }
  
  return objectArray; 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // use for in loop to get keys from the object  //
  for(let key in object){
    // only print the keys
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // create empty array to collect data 
  let valueArray = [];
  // use for in loop to get loop through object 
  for(var keys in object){
  // push the values onto the empty array   
    valueArray.push(object[keys]);
  }
  // return that new array which will have the values of the object 
  return valueArray; 
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // use for in loop to go through object   //
  for(let items in object){
    // only print the objects values 
    console.log(object[items]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // create new array that will hold the object keys and access the lenght property //
  // because they are in pairs you only need either the keys or the values 
  let array2 = Object.keys(object).length;
  // then just return that numerical value 
  return array2;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // create new variable to put object values in array, use reverse method to reverse those items
  let reverseArray = Object.values(object).reverse();
  // next use for loop to loop through items 
 for (let i = 0; i < reverseArray.length; i++){
   // print each value 
   console.log(reverseArray[i]);
 
 }
 
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
