/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// var, let, const// 
// These are each ways to declare a variable. 
// VAR: var was the word used for variable in eariler
// versions of javaScript.  Let and Const were
// introduced later.  This was because the var keyword
// was causing some problems due to the fact that it could
// be reassigned so easily and that it was hoisted. It is 
// global and local scoped. 

// LET:  Let is a more stable variable and although it 
// can be reassigned it remains block scoped and is not hoisted 
// in a way that can easily interfere with our code. 
// For example if var i was used somewhere for a for loop and 
// we maybe had another var i somewhere those two would affect 
// each other and because they would think they were the same thing. 
// Let is block scoped. 

let nums = 22;

// CONST: This variable keyword is the most stable because
// it cannot be reassigned at all.  So if there is a variable 
// we want to declare somewhere in our code that we do not 
// changed at all using const would be the way to go. 
// Const is block scoped. 

const ageLimit = 'over 21';


// Hoisting // 
// Hoisting as was mentioned earlier is when the interpreter
// that is scanning all the code pulls certain items to the top
// of the code in a way so it knows that they exist. With var 
// this is done but only with its declaration not with its assignment.
// For example :
console.log(x); // this would return as undefined because although x 
// exists somewhere in the code the assignment won't be usable until 
// we get to that part of the code. 
var x = "days"; 
console.log(x); // prints 'days'

// note: var inside a function will not get hoisted 
