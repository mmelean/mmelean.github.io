// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // list numbers between two integers which are given including those integers 
    // create empty array to collect data //
    let newArray =[];
    //use conditional statement to check if start integer is less than end integer 
    if (start < end){
    // use for loop to start at start number and end at end number 
    for( let i = start; i <= end; i++)
    // push each number onto empty array
        newArray.push(i);
    // 2nd conditional statement will check if end is smaller than start 
    }else if (end < start){
    // use for loop to start at the bigger number which is start and count down to end     
        for (let i = start;  i >= end; i--)
    // push those numbers onto the array     
            newArray.push(i);
        
    }
    // finally return the array with the range of numbers listed 
    return newArray;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}