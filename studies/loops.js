/*
* LOOPS: 
* Loops allow us to run through an iterable object such as an array, string or object. So we can iterate over 
* a collection of data pulling out values one by one or search through the collection item
* by item. 
* There are several different types of loops including the while loop,
* for loop, for in loop, and for of loop. 

*
*/
// 1. WHILE LOOP: 
// This loop is helpful to utilize while a certain condition is true. 
// So while the condition is true you indicate a certain code block to run. 
// Syntax: 
//  while(condition){
//      code block;
//      incrementer
//  }
  // Example: 
  var age = 18; 
  while( age < 21){
  console.log("You can't buy alcohol yet");
  age++;
  }
  // Result: "You can't buy alcohol yet" will print
  // These can be helpful when we don't necessarily have an iterable object 
  // to loop through and don't have a specified length. So it will run
  // as many times as it needs to. 
  
// FOR LOOP:
// These are used to shuffle through arrays and strings in particular. 
// So you set a starting point and an end point and instruct how you 
// would like to increment through the loop and what code block you 
// would like to run at each iteration or each loop. 
// Syntax: 
//for( initializer; end; incrementer){
//    code block;
//}
// Example:
let numArray = [24, 5, 16]
for (var i = 0; i < numArray.length; i++){
  console.log(`This is the number: ${numArray[i]} at index ${i}`);
}
// Result: The phrases below will print from our loop. 
//This is the number: 24 at index 0
//This is the number: 5 at index 1
//This is the number: 16 at index 2


// FOR-IN LOOOP: 
// These are used with objects. They are helpful in accessing 
// the keys and values in objects. 
// Syntax:
//for(let  key in object ){
//    code block
//}
// Example:
let people = {mom: "Martha", dad: "Robert", child:"Alex"};
for( let key in people){
    console.log( people[key])
}
//Result: So the values will print on each loop. 
//Martha
//Robert
//Alex 

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
// An example of this might be counting through numerical values. 
for ( let i = 2; i <= 10; i++){
    console.log(i);
}
// Result:This will list out the digits from 2 -10 
// 2
// 3
// 4
// 5
// 6
// 7
// 8 
// 9
// 10
// If we wanted to run through this starting at 10 you 
// can just set that as the initializer and set end to be >=0 and 
// use incrementer i-- which indicates it counts down.

// 3. Loop over an Array, forwards and backwards: See above 

// 4. Loop over an Object: See for in loop. 