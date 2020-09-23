/*
*
* CONTROL FLOW (CONDITIONAL STATEMENTS) :
*
* This is a way of making decisions to implement actions based off 
* true and false conditions. 
* That is why these are also called conditional statements. 
* Basically it is much like a decision tree; so if 'this' is true I do this 
* action otherwise if 'this' is false I do this other action instead. 
*
* 
*/

// 1. If:
// The if statement would be the most basic form of a conditional statement.  
// This is our first question to inquire about a condition. 
//
// SYNTAX: if(condition){ code block with resulting action}
//
// EXAMPLE:
// So an example question could be if jar one holds more than jar 
// two then I want to pick jar one.
 
let jarOne = 42;
let jarTwo = 12;
if(jarOne > jarTwo){
    return jarOne; 
}

// What this will do is evaluate the conditional statement which is 
// (jarOne > jarTwo) and evaluate whether it is true or false.  
// If it is true then it proceeds to the code block and executes it.
// In this example because we only have an 'if' statement, 
// it has no alternative to execute if it is false so if it is 
// false nothing will happen. 
//
// RESULT = return jarOne; 
// In the above example: yes jarOne does hold more than jarTwo 
// or technically it's value is greater than jarTwo so it will return jarOne. 


// 2. Else-if
// With the else if statement we now branch out by providing another 
// option for a second condition. So here there are two possible outcomes for what could happen.  
//
// SYNTAX: if (condition){code block with action} else if (2nd condition)
//          {another code block with a different action} 
//
// EXAMPLE: 
// We will check what the weather is and the result will be 
// seeing a certain phrase print to the console based off that result. 
// Essentially here we are saying if the weather is 'hot' print the
// phrase "Whew it's hot" otherwise if the weather is 'cold' print 
// "I need a jacket". 
// Now it's important to note here we have only provided two possible
// outcomes so if the weather was 'chilly' nothing would print to the
// console because we did not list a specific condition for that situation.
// * YOU can list as many else if statements as you would like 

let weather = 'cold';
if(weather === 'hot'){
    console.log("Whew it's hot");
}else if(weather === 'cold'){
    console.log('I need a jacket');
} 

// RESULT: 'I need a jacket' 
// Here we have the weather listed as 'cold' so when we go to 
// our conditional statement it will look at the first condition 
// (weather === 'hot') and evaluate if that is true. 
// The weather is not 'hot' however so that condition is false
// and it will proceed to the next conditional statement to see
// if that is true.  Ah ha! Yes the weather is 'cold' so the 
// statement is true and that means it can execute the code block
// provided which is printing 'I need a jacket' to the console.


// 3. Else
// The else option is something we can use a final alternative. 
// What I mean is it's kind a blanket statement to say well if nothing so far has been 
// just do this. So you could have a final conditional statement listed or no conditinal statement. 
// REMINDER: You can only list else once 
//
// SYNTAX: 
//    if (condition)
//.      {code block with action} 
//.   else if (other conditions)
//          {another code block with a different action} 
//    else (final optional condition or no condition at all)
//.        {last code block}
// 
// EXAMPLE: 
// If we wanted to give an option for what would happen
// if the weather was "chilly" some other random word.  
// We could use an else statement to account for what to do 
// if weather is something other than 'hot' or 'cold'. 

let weather2 = 'chilly';
if(weather2 === 'hot'){
    console.log("Whew it's hot");
} else if(weather2 === 'cold'){
    console.log('I need a jacket');
} else {
    console.log("I don't know what to tell you")
}

// RESULT: 'I don't know what to tell you'
// Neither of the first two conditions were true so it 
// proceeded to the final else statement and there
// was specific condition listed so it will 
// take into account any other response that could 
// have been present for weather and gives a blanket 
// response.  

// 4. Switch
// A switch statement is a good way to use the control flow process 
// when first using a baseline statement then using 
// different value outcomes of the statement and what 
// code would run based on each value. It can be a good
// alternative if you have many nested if else statements. 
// Essentially it you provide a case and it will run a corresponding 
// block of code. 

// SYNTAX: 
//  switch(expression) {
//   case n:
// //    code block
//     break;
//   case n:
//     code block
//     break;
//   default:
//     default code block
// }
