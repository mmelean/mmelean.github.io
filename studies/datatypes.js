/*
* DATATYPES:
* Datatypes are how we distinguish the different
* values we utilize when coding. There are two
* datatypes: simple/primitive and complex. 
* 
* SIMPLE/Primitive:
* Includes: Number, string, boolean, NaN, Null, undefined,
* infinity, -infinity
* These datatypes are immutable or in other words 
* can not be changed. So an action done on a simple value 
* will return another value altogether. They have a limited 
* capacity of 8 bytes. They are copied by value which means 
* that when another variable tries to hold that value as well
* it will just copy that value and hold a copy. So when alterations
* are then done to both variables they are each changed accordingly 
* even though they started out the same.
* 
*
* COMPLEX:
* A complex datatype can be an unlimited size and can keep 
* accumulating more data. 
* Includes: Array, object, function 
* These datatypes are copied by reference so if two variables try 
* point to the same object the second one will make a copy by reference
* meaning they will both acutally be pointing to the same object. So
* if an alteration is made to one of the variables it will change that
* one object that they are both pointing to. 
*
*/
//EXAMPLE OF SIMPLE DATATYPE and COPY BY VALUE:
var x = 10; // this is a number which is a simple datatype
var y = x; // now x is assigned to y so a copy by value will be done
console.log(x) // this will be 10
console.log(y) // this is also 10 
x + 1;  
console.log(x) // now x will be 11
console.log(y) /// but y stays 10 because it was only copied by value

// EXAMPLE OF COMPLEX DATATYPE AND COPY BY REFERENCE: 
let z = { day: "Tuesday", hour: "two"}; // this is an object which is complex 
let a = z; // now both a and z are both referring to the same object
a.day = "Monday"; // the key day has it's value changed to "Monday" 
console.log(z) // This will now be { day: "Monday",  hour: "two"} because
// both variables are pointing to the same object and a change done to
// one variable will affect the object that they both point to

// 1. Number //
// Simple datatype that is just a number 
// Example:  24

// 2. String //
// Simple datatype that is a group of characters 
// surrounded by quotes either ' ' or " " 
// Example: "The dog ate the cat" 
// Another way to write out strings is using template
// literals. This a way to write out a string and 
// interpolate other variables into the string without
// using + signs. 
// EXAMPLE : Combining strings with + signs 
let color = "red";
let age = 5;
let phrase = "Hi I am" + ' ' + age + " " + "years old." + "My favorite color is " + color + "."; 
// This prints "Hi I am 5 years old. My favorite color is red." 
// EXAMPLE: With template literal 
let phrase2 = `Hi I am ${age} years old. My favorite color is ${color}.` 
// Which prints the same sentence but without all the extra + signs 

// 3. Boolean //
// Simple datatype signifying true or false. 
// Example : true; 

// 4. Array //
// Complex datatype. This holds list type data. 
// They are placed in brackets and indexed in a 
// certain order. 
// Example:
let array = [1, 2, "dog", true] // so here you can see an array 
// can be a list of mulitple different datatypes
// You can access specific items from it using their index 
// which is their place in the list and it starts from 0, so 
// if you wanted to access dog it would be at index 2 and written like this:
array[2] // equals "dog" 


// 5. Object
// Complex datatype. These consist of key/ value
// pairs in curly braces so when you need something more descriptive than 
// just an index to identify what your value is you can use an object. 
// EXAMPLE: 
let obj = { adults: 1, children: 2, animals: "dog", together:true} 
// The way to access a value here would be using dot or bracket notation
obj.children  // would give you 2
obj["adults"] // would give you 1 

// 6. Function
// Complex datatype. This is helpful to use if you need an 
// action or code block that needs to be reused over and over. The 
// entire thing can be tucked away in a function and then invoked later
// by calling the function. You can use parameters for which arguments 
// can be used in when being called. 
// Example: function declaration
function mulitply( num1, num2){ // num1 and num2 are parameters 
    return num1 * num2;
}
//multiply(5,3) // this calls the multiply function
// and passes the arguments 5 and 3 into it returning a value of 15 
// function expression:When a function is assigned to a variable.
let add = function( num1, num2){
    return num1 + num2;
}
add(2,7) // this calls the function and passes 2 and 7 as arguments
// the result is 9 

// 7. undefined
// Simple datatype that is used when a variable has been declared
// but not assigned yet. Also will result if a function if a value
// was not returned. 

// 8. null
// Simple datatype which indicates "nothing". It means you are 
// specifying nothing is there.  It technically is an object but is 
// considered a simple datataype. 
let num3 = null;
typeof null;  // equals object 


// 9. NaN
// Simple datatype. this stands for not a number when you end 
// up with a numerical value that doesn't have a meaningful result. 
// It is technically a number. 
//1 + NaN = NaN; 
typeof NaN; // equals number

// 10. Infinity and -Infinity 
// Simple datatype. These are number data types but don't 
// behave like numbers: Infinity stands for positive infinity
// and -Infinity represents negative infinity. 


// 11. What is the difference between primitive/simple and complex data types?
// see above

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
// see above 

// COPY BY VALUE: 
// When we say copy by value it refers to primitive datatypes and how they can be reassigned to other variables. So when we copy the information to another 
// variable a whole new copy of that simple data type is made. Therefore there is no connection between it's original and the new copy and changes made 
// to copy will not affect the original.  
// EXAMPLE: 
 let x = 22;
 let y = x; 
 console.log(y);  // the value of y is now 22 
 y + 1 // y will now be 23
 console.log(y). // y now is equal to 23 
 console.log(x). // however x is still equal to 22 
 
 // COPY BY REFERENCE: 
 // When you copy something by reference you are copying a complex data type such as an object or array. In this case when making a copy you
 // will only create a reference to the original because actually copying a possible large amount of data would take a lot of memory. 
 // By being able to just refer or point to that original you can just have the item present once.  
 // The thing that happens with this however is that now changes made to either variable that may be pointing to this original item will
 // in fact alter that original item. 
 // EXAMPLE: 
 let exampleObject = {patient:"Sally", age: 55, status: "inpatient"};// this is our original object
 let patient = exampleObject; // now we have a assigned a new variable to refer to the same object 
 patient.status = "outpatient";  // we have assigned a new value to the status key 
 exampleObject.status;  // this now will also be "outpatient" because our alteration affected the original item
 
 
