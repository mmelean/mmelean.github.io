// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// combine items from all arrays into new single array
function flatten(arr) {
  // use reduce with empty array as seed to concat all the items 
 return arr.reduce( (acc, curr) => acc.concat(curr),[]);
  
  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for(let value = start; test(value); value = update(value)){
    body(value);
  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// takes in an array and a function 
function every(array, predicate) {
  // using for of loop access every item in array
  for(let element of array){
  // check if by passing the predicate function it results in false
  // if even one item results in false when applying the function test
  // then return false
    if(!predicate(element)){
      return false;
    }
  }
  // otherwise every item would have passed the function test 
  // therefore it would be true 
    return true;
  

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(str) {
  const arr = countBy(str, function(char){
    // get the unicode value for the current character
    const unicode = char.charCodeAt();
    //console.log(unicode);
    const script = characterScript(unicode)// this doesn't work because null which returns for null doesn't have a direction
    if( script !== null){
      //return the script direction if the script isn't null
      return script.direction;
    }else{
      //otherwise return null for the characters that would be null like
      // the exclamation mark in Hello!
      return script;
    }
    
  });
  //console.log(arr);  this gives us the object with {name:ltr, count:2} etc so now we see which one is more prevalent 
  // now we need to find the highest count by sorting , sort is an impure function which will affect the given array 
  arr.sort(function(a,b){return b.count-a.count});
  // finally return the name of the first item which has the highest count  
  return arr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
