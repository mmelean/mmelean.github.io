/*
* OPERATORS
* Operators act on our data. They apply themselves
* to operands which are the values that they 
* are working with.  There are several categories 
* of operators based off what they can do. 
*/



// 1. Assignment operators
// These assign a value to the left operand 
// base off the value of the right operand. 
// These include =, +=, -=, /=
// EXAMPLE: 
 let seasons = 4; // the = sign is the operator 
// seasons and 4 are the operands, so 4 is being
// assigned to the variable seasons. 
seasons += 2; // this is seasons value of 4 and 
// setting it equal now to 4 + 2 which would give us 6 
// so it acutally assigned a new value to seasons 
console.log(seasons); // this would result in 6

// 2. Arithmetic operators
// These are operators which perform mathematical 
// operations.  These include +, -, /, **, *, % 
// % is called a modulus operator. It is a way of 
// returning the remainder after and number is divided by 
// another number. 
// EXAMPLE: 
let num = 46
let odd = ( num % 2 === 1) // this resolves to false because 
// the remainder of 46/2 is not 1. 

// 3. Comparison operators
// These are operators that compare two operands. They 
// include  >, <, <=, >=, !==, ===, == 
// So for example !== means something is not equal to something else. 
4 !== 5;  // so 4 is not equal to 5 
// === is used when something is strictly equal meaning equal in value and type. 
4 === 4  // this is true these are strictly equal because they are both numbers and they are both 4 
// whereas 
'4'=== 4 // this is false because although the value 4 is equal to 4, the types are different. 
// One is a string and one is a number. 


// 4. Logical operators
// Helps to resolve some logic. They are used in conditional statements to examine 
// different conditions. 
//Examples are &&, ||, !
// &&:  This is used as an and symbol to see if item on the left 
// and the item on the right are both true. 
// Example:
if (1+1 && 2+2){
    console.log('yup')  // yup would print to the console because both 
// statements are true 
}
// Using || is like saying or. 
// so 
if (true || false){
    console.log('days')// days would print because at least one of the conditions is true
}

// !  This is called a bang operator and essentially makes something falsy 
!false  // this actually makes it true because it is not false 

// 5. Unary operators (!, typeOf, -)
// A unary opertor only uses one operand.  
// Example: 
typeof 44; // this gives us 'number' because the type of 44 is a number 
// 44 is the operand and typeof is the operator 

// 6. Ternary operator (a ? b : c)
// This uses 3 operands. It means a is the condition. So if it true
// run code block b, if it is false run code block c.  