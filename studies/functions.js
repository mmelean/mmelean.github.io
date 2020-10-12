/*
* FUNCTIONS: 
* Functions provide a way to group a block of code and 
* use it as needed. It is a complex data type, technically
* an object and can used as a value. It can return a value or
* even another function. 
*
*/

// 1. The two phases to using functions: Declaration and Invocation
// DECLARATION: 
// To declare a function we give it a name and then in parenthesis 
// we can place parameters followed by the code block which is in 
// curly braces. 
// EXECUTION: 
// This can also be calling or invoking a function. It is done 
// by stating the function name and passing in arguments for the 
// parameters we had declared before. 
// Example: 
function divide(num1, num2){ // declaration with parameters num1 and num2 
    return num1/ num2; // this function returns a value 
}
divide(10,2); // invocation by using the name given and passing 
// arguments thus 10 divided by 2 results in 5. 


// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
// The parameters can behave as placeholders for different values to be passed in which are 
// the arguments.  That way a function can be used over and over with different arguments. 
// which results in different outcomes. In this way the function becomes a tool. 

// 3. What’s the syntax for a NAMED function?
// In the above example divide is the name of the function. It is similar to 
// the rules implemented when naming a variable. 

// 4. How do we assign a function to a variable?
// You can simply place a variable before the function name. 
// This is also called a function expression. 
let subtract = function(num1, num2){
    return num1 - num2; 
}
subtract(9,5) // result is 4 

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
// The inputs are the arguments we pass in and the outputs are the resulting 
// values that are returned from running the function.  For example in the 
// above problem 9 and 5 are the inputs and 4 is the output. 

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
// A function does not allow variables enclosed in its code block to be accessed outside
// the code block.  So if there was a variable declared in the function, it 
// could not be used by something else on its. It values can only be pulled out
// by invoking the function itself. Whereas a function can pull information from variables 
// declared outside its scope if needed. 

// 7. Closures: Functions form closures around the data they house. 
//   If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
//   (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)

// EXAMPLE : 
let age = 55; // this variable is declared in the global scope
let sample = function(n){
    return age + n;// this function has now created a closure and can refer to variables within the global scope 
};
sample(5);