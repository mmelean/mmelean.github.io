// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120


var factorial = function(n) {
// base case if n is 0 return null and if n is 1 return 1   
  if(n < 0) {
    return null;
  }else if (n === 0){
    return 1;
  }
  // recursive statement with multiply n by n - 1 each time 
  
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

// base case here will check if it gets down to an empty array so it can return 0 
// a second base case if the array only has one number then just return that one number
// the recursive statement will add your first number from your array with the first item removed
// each time 
var sum = function(array) {
// base case when array length is 0 then the sum is 0   
  if(array.length === 0){
    return 0;
// otherwise if the array has only one item just return that item     
  }else if ( array.length === 1){
    return array[0];
  }
// the recursive statement will the first item plus the array having one item sliced off each time until it gets down to the base case   
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
// there are two base cases: one to result in true if the number is even
// one base case to return false if the number is odd
// use one recursion statement if n is a negative number,you will add 2 to n to get 
// to your base case
// a second recurstion statement for positive numbers so you will substract 2 from n to get to 
// your base case 
var isEven = function(n) {
  if(n === 0){
    return true;
  }  
  if (n === 1){
    return false;
  }
  if(n < 0){
    return isEven(n+2);
  }
  return isEven(n -2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

// take the sum of every number occuring below n 
// Two base cases, one for positive numbers to reach 1 
// and another base case for negative numbers to reach -1 as well 
// the recursive statement will add a number to n - 1 for positive numbers
// and n +1 for negative numbers 
var sumBelow = function(n) {
  if(n === 0){ return 0; }
  if (n < 0){
    return n+1 +sumBelow(n +1); 
  }
  if( n > 0){
    return n-1 + sumBelow(n -1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	
  let r = [];
  // create variable step to help determine weather to range up or down 
  const step = x > y? -1: 1;
  // base case : if x = y return an array
  if( x === y) return r;
  // if x has only one number in between then also return an empty array 
  if( x === y -step) return r;
  // finally implement your recursive statement adding the numbers to the array using concat
  // adding step to x will account for all ranges 
  return r.concat(x + step, range(x + step, y));
};
// A second option for range 
// var range = function(x, y){
//   if (x > y) {
//     if (x - y <= 1) return [];
//     if (x - y === 2) {
//       return [y + 1];
//     }
//     else {
//       var list = range(x, y + 1);
//       list.push(y + 1);
//       return list;
//     }
//   }
//   else {
//     if (y - x <= 1) return [];
//     if (y - x === 2) {
//       return [x + 1];
//     }
//     else {
//       let list = range(x, y - 1);
//       list.push(y - 1);
//       return list;
//     }
//   }
// };
  


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number


var exponent = function(base, exp) {
// base case for the exp being 0 which results in 1
  if(exp ===0){
    return 1;
  }
// base case for the exponent being 1 which is just the base number returned   
  if( exp === 1){
    return base;
  }
// check if the exponent is a negative number then use recursive statement accordingly 
// with the recursive statement being the denominator because ex: 8^-1 essentially means
// 1/8 
  if(exp < 0){
    return 1/( exponent( base, -exp));
  }
  // otherwise simply take the base timees the exponent and work your way down with exponent 
  // subtracting 1 every time until the exponent reaches the base case 
  
  return base * exponent(base, exp -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// base case when n = 1 it is a power of two   
  if( n === 1){
    return true;
  }
// base case if it hits 0 it is false and is not a power of 2   
  if (n === 0) {
    return false; 
  }
  //recursive statement will keep dividing by two until it hits either 1 or 0
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
// base case will be reached when the string.length is 0
  if(string.length === 0){
// when it does reach the base case then return an empty string     
    return '';
  }
// the recursive statement slices off each letter and then adds it to the first letter  
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
// first remove all the spaces from the string using regex function and assign that to a new variable.
  let str = string.replace(/ /g,'');
// base case will now check if the string has only one item left or starts with only one item it
// will be true
  if(str.length <= 1){
    return true;
  }
// if the first letter and the last letter are the same   
  if (str[0].toUpperCase() === str[str.length -1].toUpperCase()){
// then proceed to your recursive case by chopping off the first and last letter each time     
    return palindrome(str.substring(1, str.length -1));
  } else{
// because if at any time your first and last letter don't equal then it's false     
    return false; 
  }  
    
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// for multiply the base cases for y =1 will just return the y argument , also if y is 0 the result will be 0
// and if y is negaitve then you will implement one recursive statement turning each parameter negative
// otherwise increment y down by one each time and add x that number of times 
var multiply = function(x, y) {
  if(y===1){
    return x;
  }
  if(y===0){
    return 0;
  }if(y < 0){
    return multiply(-x,-y);
  }
  return x + multiply (x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  if(str1[0] !== str2[0]) // the base case is if at any point the first letter in the strings 
  // don't equal each other then it is false 
  { return false;} 
  // otherwise if the two strings are equal then it is true 
  if(str1 === str2){
    return true; 
  }
  // the recursive statement compares both strings letter by letter 
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){
// base case if the string length is 0 then return an array 
  
  if(str.length === 0){
    return [];
  }
// otherwise implement recursive statement which will place each letter one by into the array  
  return [str[0]].concat(createArray(str.slice(1)));
  };


// 17. Reverse the order of an array
var reverseArr = function (array) {
// base case when array length is 0 then return empty array  
  if(array.length === 0) return [] ;
// otherwise implement recursive statement which takes each letter and adds it backwards into the new array   
  return reverseArr(array.slice(1)).concat(array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
//. base case if the length given is 0 just return empty []  
  if(length === 0){
    return [];
  }
// otherwise implement recursive statement with takes the value and adds it to the array 'length' number of times   
  return [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
// create new variable to start at 0   
  let num =0;
// base case for when the array length is 0 to return the num   
  if(array.length === 0){
    return num;
  }
// if the value given matches the item in the array then increase num  by 1  
  if(array[0] === value){
    num++;
  }
// recursive statement will take num and add it for every item in the array that matches the value   
  return num + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
// when the array length is 0 return the empty array   
  if (array.length === 0) return [];
  
 // recursive statement will take each item in the array and apply the callback putting the result into the empty array  
  return [callback(array[0])].concat(rMap(array.slice(1),callback));
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
//base case if n is less than 1 then return null   
  if (n <0)return null;
// if n is 0 or 1 return n   
  if(n <=1) return n;
 // recursive statement will decrease n by 1 and by 2 adding them to result in the nth index placement of the number given  
  return  nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
// base case if input array is 0 return empty array   
  if(input.length === 0) return [];
// recursive statement will add each item one by one after capitalizing each word  
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
// base case when array length is 0 return empty array  
  if(array.length === 0) return [];
// create variable that will pull first letter from each item and capitalize it   
  let firstLetter = [array[0][0].toUpperCase() + array[0].slice(1)];
// recursive statement will use that variable and utilize it on each word adding 1 by 1 to the empty array   
  return firstLetter.concat(capitalizeFirst(array.slice(1))); 
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
// base case if string length is 0 then return   
  if(str.length === 0) return;
// if the obj is undefined then return an empty object   
  if(obj === undefined) {
    obj = {};
  }
  
  // if the item of the object matching the string is found then add one 
  if(obj[str[0]]){
    obj[str[0]]++;
  }else {
  // if it isn't found then make it a key with a value of 1   
    obj[str[0]] =1;
  }
  // recursive statement will run through each letter 
  letterTally(str.slice(1),obj);
  // return the final object which should have the accumulated counts 
  return obj;
  
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
// base case if the list length is 1 just return the list   
  if(list.length <= 1) return list;
  // create empty array 
  var shortList = [];
// another base case if the first item in the list matches the second item then remove the first item  
  if(list[0] === list[1])
  {
    list.shift();
  // and implement recursive statement concat the list  
    return shortList.concat(compress(list));
  }else{
  // otherwise just push the items onto the new list   
    shortList.push(list[0]);
  // and use recursive statement to run through each item   
    return shortList.concat(compress(list.slice(1,)));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
// base case if array length is 1 return the array   
  if(array.length <= 1) return array;
// create empty array   
  var shortList = [];
// if first item and second item are equal and the first item is a 0   
  if(array[0] === array[1] && array[0] === 0)
  {
  //then remove the first item   
    array.shift();
  // use recursion to add this to array   
    return shortList.concat(minimizeZeroes(array));
  }else{
// otherwise just push the first item and use recursion the run through each number     
    shortList.push(array[0]);
    return shortList.concat(minimizeZeroes(array.slice(1,)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // if array length is 0 return array 
    if (array.length === 0) { return array; }
// another base case if the first item is neg then convert it to positive     
    if(array[0] < 0) { array[0] = -array[0]; }
// base case if the second item is positive then convert it to positive     
    if(array[1] > 0) { array[1] = -array[1]; }
// otherwise use recursive statement to run through the items two at a time     
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
// create variable object giving the numbers their corresponding word values (only test numbers included here)  
    const numConversions = {
    1: "one",
    3: "three",
    5: "five",
    6: "six"
  };  
// base case if the string length is 0 then return an empty string   
  if(str.length === 0) return '';
// if first item is not a number and not a space   
  if (!isNaN(str[0]) &&  str[0] !== ' ') {
 // then use recursive statement to run through each item  using the num conversions on each item that is a number
    return numConversions[str[0]] + numToText(str.slice(1,str.length));
  }else{
    // otherwise use recursion just normally adding the item to the empty string 
    return str[0] + numToText(str.slice(1,str.length));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
