////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// when given two numbers return the number that is small in value 
function min(num1,num2) {
// use if statements for possible combinations of num1 and num2
// first if num1 is less then num2 
  if(num1 < num2){
    return num1;
  }
// if num 2 is less than num 1  
  if (num2 < num1){
    return num2;
  }
// if both numbers are negative but num 1 is less than num2 in value  
  if( num2 < 0 && num1 < 0 && num1 < num2){
    return num1;
    
  }
// if they are negative but num 2 is less than num1   
  if(num2 < 0 && num1 < 0 && num1 > num2){
    return num2;
  }
// also if both numbers are the same   
  if(num1=== num2){
    return num1;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// use recursion to find out if a number is even
// take into account negative numbers as well 
function isEven(num) {
// base case when num is 0 return true because it is even
if(num === 0) return true;
// base case when num is 1 return false because it is not even
if(num === 1) return false; 
// if the num is negative
if (num < 0){
// use recursion by increasing that negative number by 2 each time until it hits the base case  
  return isEven(num + 2);
}else{
// otherwise if its positive utilize the recursive statement by subtracting 2 from n   
  return isEven(num - 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// count the number of times a specific character occurs in the string 
function countChars(str,char) {
  // first loop through the string to evaluate each character and check if 
  // it equals the given character
  // create baseline variable to hold count and set it at 0
  let count = 0;
  for( let i =0; i < str.length; i++){
    if(str[i]=== char){
  // if the char matches then add 1 to the count    
      count++;
    
    }
  }
// return your final tally   
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
// loop through the string to check each character and see if it's a B , then tally that count
// set a baseline count starting at 0 
let count = 0;
for (let i = 0; i< str.length; i++){
// loop through the item and if the item is a B then add 1 to the count 
  if( str[i].toUpperCase() === 'B'){
    count += 1;
  }
  
}
return count;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
