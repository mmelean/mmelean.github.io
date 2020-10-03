// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function( value ){
    return value; 
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// I: value
// O: string stating what the value is 

// use Array.is Array to check if it's an array and also check if the value 
// is null.  Indicate a specific string of 'array' and 'null' for these because
// otherwise using type of will return 'object for these'
_.typeOf = function (value){
    if( Array.isArray(value)){
        return "array"; 
    } else if ( value === null){
        return "null";
    } else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// I: array, number
// O: new array with the <number> of elements from beginning of array

// Use conditional statement to check for outliers so if an array is not given or the number is negative
// then just return an empty array. If the <number> is not a number return the first
// element in the array. If the the number is greater than the array length then
// return the entire array. 
// otherwise just splice the array from the 0 to the <number> of elements and that 
// will return the new array
// 

_.first = function(array,number){
    if(!Array.isArray(array)|| number < 0){
        return [];
    } else if (typeof number !== 'number'){
        return array[0];
    } else if (number > array.length){
        return array;
    
    }else {
        return array.splice(0,number);
    }
        
    
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// I: array, number
// O: array with number of elements from end of array

// use conditional to see if array is given or if number is negative then return
// []. Also if number is not given then return last element, and if number is greater
// than array length then return entire array. 
// otherwise use slice to cut off a piece of the array a certain number of items 
// from the end off 

_.last = function(array, number){
    if(!Array.isArray(array)|| number < 0){
        return [];
    } else if (typeof number !== 'number'){
        return array[array.length -1];
    }else if( number > array.length){
        return array;
    }
    else {
        return array.slice(array.length - number); 
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// I: array, value
// O: return number indicating index where value was found in the array 

// use for loop to search through array to look for value. If it is found exit 
// loop by returning index where it was found. If it is not found return -1. 
_.indexOf = function(array, value){
    for(let i = 0; i < array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
        return -1; 
        
    
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// I: array, value
// O: true or false depending on if value is found in array

// Using ternary statement check if array includes the value 
_.contains = function( array, value){
    return(array.includes(value)? true: false);
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// I: collection, function
// O: there is no return from this but it will loop through each element and apply
//.   the function 

// if its an array type of collection loop through it and apply function to each 
// element index and array
// if its an object type of collection then use for in loop and apply function
// to the value, key and object 

_.each = function(collection, func){
    if (Array.isArray(collection)){
        for( let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    }else if (typeof collection === 'object'){
        for( let key in collection){
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// I: array
// O: new array with duplicates removed

// create empty array for data, loop through given array push each element onto 
// new array.  While doing this check if the element you are about to push is 
// already in the new array, if so, then don't push it.  
// finally just return that new array.  
_.unique = function(array){
    let newArray =[];
    for( let i = 0; i< array.length; i++){
        if ( !newArray.includes(array[i]) ){
         newArray.push(array[i]);
        }
    }
    return newArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// I: array, function 
// O: new array elements for which applying the function returned true

// create empty array to collect data, use each to loop through elements and 
// apply the function to each element then if that resolves to true push it 
// onto the empty array 
_.filter = function(array, func){
    let filterArray = [];
   _.each(array,function(e, i, array){
       let outcome = func(e,i,array);
            if(outcome === true){
            filterArray.push(e); 
            }
   });
    return filterArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// I: array, function
// O: new array for which the function applied to its elements returned false

// create empty array to collect data. Use each to loop through elements in 
// array and apply function. Push only those elements that return false onto the 
// new array. 
_.reject = function(array, func){
    
    let falseArray = [];
    _.each(array,function(e, i, array){
    let outcome = func(e,i,array);
        if(outcome === false){
        falseArray.push(e); 
        }
    });
    return falseArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// I: array, function
// O: new array containing two subarrays: one with true results, one with false results

// create two empty arrays to collect separate data 
// use each to loop through array and apply the function then push the 
// true results onto one array and the false results onto the other array
// finally just return a new array containing the other two arrays. 

// this is another option utilizing the filter and reject functions 
// return [_.filter(array,func), _.reject(array,func)];
_.partition = function(array, func){
    
  
    let truthy = [];
    let falsy = [];
    _.each(array, function( e, i, array){
         if(func(e, i, array)){
              truthy.push(e);   
            }else if(!func(e, i , array)){
                falsy.push(e);
            }
        
    });
    return [truthy,falsy];
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//I: collection, function 
// O: new array containing elements of original collection after having the function
//.   applied

// first create empty array to collect data, You can you each function to loop
// through the items and apply the function to each element then push those items 
// onto the empty array
_.map = function(collection, func){
    let newArray = [];
    if (Array.isArray(collection)){
        for( let i = 0; i < collection.length; i++){
            
            newArray.push(func(collection[i], i, collection));
        }
    }else if (typeof collection === 'object'){
        for( let key in collection){
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;
};
// here is a second option using each 
//     let newArray = [];
//     _.each(collection, function( thing, i, array){
//       newArray.push(func(thing,i,array)); 
//     });
//     return newArray;
    


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*
*/

//I: array , property(key)
//O: array containing the items that were values for the key that matched the property
// given 
_.pluck = function(array, property){
    
  return _.map(array, function(element){
        return element[property];
    });
    
    
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// I: collection , function 
// O: boolean giving true if applying the function to each element in the collection
//.   results in true value

// create baseline status of true 
// loop through the items applying the function to all of them and change that 
// baseline to false if it finds a false value or if no function is given and every 
// item on its own is false 

_.every = function(collection,func){
    let result = true;
    _.each(collection, function(e, i, collection){
        if (typeof func === "function"){ 
            if(!func(e ,i, collection)){
        
            result = false;
            }
            
        }else if ( !e ){
          result = false;
        }
        
        
    });
   return result;  
}; 


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// I: collecion , func
// O: boolean : if at least one item is true after applying function return true 

// start with baseline at false this time and change it to true if one true item is
// found after looping through and applying the function or if no function is given 
// and at least one item on its own is true
_.some = function(collection, func){
    let result = false;
    _.each(collection, function(e,i,collection){
        if(typeof func !== "function"){
            
            if (e){
            result = true;
            }
        }
        else if(func(e, i, collection)){
            result = true;
        }
        
        
    });
    return result; 
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// I: array, function, seed 
// O: Final value after running the final function call through all the elements in the array

// set your starting point as the seed, if no seed is given then the starting point will be the array[0]. 
// Then begin to run the function through each item in the array by looping through it and changing each final result
// subsequent based off the previous result 
_.reduce = function(array,func,seed){
    
        let previous = seed;
        if(seed === undefined){
            let previous = array[0];
            _.each(array, function( e, i ,array){
                if(i!==0){
                previous= func(previous, e, i );
                }
            });
        return previous; 
        }
        _.each(array, function( e, i ,array){
            previous = func(previous, e, i);
        });
        return previous;
        

};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// I: object 1, object 2, possible unlimited objects
// O: one object with all items from other objects copied into it 

// Use Object.assign to copy items from one object to another and the spread operator to take into account unlimited
// number of objects
_.extend = function(object1, object2){
    return Object.assign(...arguments);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
