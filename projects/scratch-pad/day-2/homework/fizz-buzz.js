// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
// first create for loop that includes all the numbers you want to include which in 
// this case is 1 through 100 
for( var i =1; i <= 100; i++){
// set the first conditional statement to rule out if the number is a factor of 3 and 5
    if( i % 3 === 0 && i % 5 === 0){
    // and to print "FizzBuzz if that is true"    
        console.log("FizzBuzz");
// use a second conditional for factors of 5 only 
    }else if (i % 5 === 0){
// if this is true print "Buzz"
        console.log("Buzz");
// set third conditional to account for factors of 3 
    }else if ( i% 3 === 0){
// if this is true print "Fizz"
        console.log("Fizz");
    }else{
// and finally just print all the other numbers as is if they do not meet any of these conditions 
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}