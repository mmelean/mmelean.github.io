/**
 * 
 * HOISTING: This is a process that the operating system interpreter does to code when it first scans it.  It will prioritize and 
 * and pull certain items to the top of the page. For example all var and function declarations are hoisted to the top of the page. 
 * What this means is that when a var variable is declared only it's declaration not its assignment will get pulled to the top.  
 * Because of this if you try to reference a var variable before it is declared you will only get an undefined return as 
 * opposed to an error which is something that might occur with a let variable or const variable.  The error will show up stating 
 * that the item has not been declared yet because it was not hoisted.  
 * 
 */
 
 // How are variables hoisted in JavaScript?
 // - Var variable declarations are hoisted but not their assignments whereas let and const variables are not hoisted. 
 // Example: 
 console.log(day);// this will return undefined because although the variable day using var was not declared 
 // before being referenced, it was hoisted and therefore it's declaration is known to the computer and was hoisted 
 // to the top but the assignment was not so it results in undefined. 
 var day = "Monday";
 
 // How are function declarations hoisted? How are function expressions hoisted?
 // - Function declarations are hoisted to the top whereas a function expression will not be. A function declaration along with the entire body
 // of the function will be hoisted. 
 //Example: 
 console.log(watch());  // this will show up as [function:watch] because although it has not been declared yet in the code
 // it was hoisted and therefore will not return an error 
 function watch(num){
  console.log("Make sure to watch the show at" + num);
 }
 
 // What is the JS interpreter? 
 // The JS interpreter is the intermediary used by the computer to understand javascript code. It will scan the code and convert it from 
 // high level code to low level machine code.  
 // EXAMPLE: 
 let result = true;  // the boolean true will be converted to a 0 or 1 by the interpreter for the computer to easily process this data 