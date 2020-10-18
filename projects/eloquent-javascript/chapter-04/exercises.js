////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// parameters are all numbers , num 1 is starting , num2 is end , step
// is incrementer 
function range(num1, num2, step){
// create empty array for output    
    let array =[];
// first check if the 2 numbers are equal return empty array    
    if(num1 === num2){
        return array;
// if there is no step then push the numbers one by one onto the array        
    }else if ( (num2 > num1) && (step === undefined)){
        for(let i = num1; i <= num2; i++){
           array.push(i); 
           
        } 
// if there is a step then increment the numbers by that step amount         
        }else if(step > 0){
            for(let i = num1; i<= num2; i += step){
                array.push(i);
            }
        }
        return array; 
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes in an array and evaluates the sum of the numbers in the array 
function sum(arr) {
    
    // use reduce to add each number and return the total , use 0 as seed 
    return arr.reduce((total, num) =>  {return total + num},0);
    

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes array and returns new array with items in reverse
function reverseArray(arr) {
    // create empty array to collect output 
    let newArray = [];
    // if your input array is empty just return the new empty array 
    if (arr.length === 0) {return newArray;}
    // use for loop to push the items onto the new array in reverse
    for(let i = arr.length - 1; i >= 0; i--){
        
        newArray.push(arr[i]);
    }
    // return the final array 
    return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
// account for the instance that array is empty 
    if(arr.length === 0) return arr;
// otherwise just use reverse method to reverse array     
    return arr.reverse();
        
    

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// each array item will have a value and rest property 
// the rest property will hold the next item 
function arrayToList(arr) {
    let list = null;
    for(let i = arr.length -1; i >= 0; i--){
        list = {value:arr[i], rest: list};
        
    }
    return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//using recursion 
function listToArray(object) {
// set base case when object.rest === null to return that object's 
// value at that point in an array 
 if(object.rest === null){
   return [object.value];
 
 }else{
 // the recursive statement will add the values of each level onto that array 
 return [object.value].concat(listToArray(object.rest));
 }
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value,list) {
    return {value, rest: list};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
//base case when there is no list return undefined    
    if(!list) return undefined;
// base case if n is 0 return that list value     
    else if(n === 0) return list.value;
// recursive statement to return the rest value and decrement n by 1 
    else return nth(list.rest, n-1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
    if (a === b) return true;
    if (a === null || typeof a !== 'object' || b == null || typeof b !== "object"){ 
    return false; 
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true; 

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
