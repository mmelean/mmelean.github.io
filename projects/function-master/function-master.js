//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: array of values from the object  
function objectValues(object) {
// create empty array to place our data     
    let arrayValues = [];
// use for in loop to iterate through the object    
    for(let key in object){
// push the values onto the empty array         
        arrayValues.push(object[key]);
    }
// return the array which now holds the values    
return arrayValues; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // I: object
    // O: string of keys from the object
    // C: string should have spaces in between words 
function keysToString(object) {
  // create empty array to collect data   
    let keyArray = [];
    for( let key in object){
// using for in loop push the keys onto the empty array        
        keyArray.push(key);
    }
// use the .join method to convert the array to a string and use ' ' to indicate spaces between words    
 return keyArray.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // I: object 
    // O: string of the values that were in the object 
    // C: the values should be separated by a space 
    // E: if the the value is not a string then don't add it 
function valuesToString(object) {
  //create empty array to collect data   
    let stringValue = [];
// use for in loop to iterate through object 
    for( let key in object){
// push the values from the object onto the empty array but first check
// if the value is actually a string 
        if(typeof object[key]=== 'string')
        stringValue.push(object[key]);
    }
// return the array with .join to create one long string and use ' ' to indicate spaces in between the individual strings 
    return stringValue.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // I: array or object
    // O: word "array" or "object" depending on whether the collection is an object or array
function arrayOrObject(collection) {
  // first check if the collection is an array   
    if(Array.isArray(collection)){
// if it is then return the word "array"        
        return "array";
    }
// otherwise just return the type of collection because 
// the only other alternative would be an object 
    return typeof collection;

    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string
//O: return the string with first letter capitalized
function capitalizeWord(string) {
  // access the first letter in the string and upper case it then just attach the rest of 
  // the word in its original state by using the .slice method 
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: a string of words
// O: return the string with all words having the first letter capitalized
function capitalizeAllWords(string) {
 //first convert all the words into an array by using .split   
    let wordsInString = string.split(' ');
// then create an empty array to collect our altered strings     
    let newArray = [];
    for (let i = 0; i < wordsInString.length; i++){
// loop through the strings array we made and take each word and capitalize just the first letter
// then push that word onto the empty array 
       newArray.push(wordsInString[i][0].toUpperCase() + wordsInString[i].slice(1));
    }
// return the new array with .join to make a string of words with a space in between each word    
    return newArray.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // I: Object
    // O: message that pulls the name value from the object and returns a message
    //   that says "Welcome 'name'!" 
    // C: the name in the message should have capitalized first letter
function welcomeMessage(object) {
 // using template literal create the message. Access the name value from our object
 // using dot notation and then further access the first letter of that name and capitalize it
 // attach the rest of that name onto the capital letter so your welcome message 
 // will be "Welcome Name!"
    return `Welcome ${object.name[0].toUpperCase()}${object.name.slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object with name and species keys 
// O: return phrase that says "'name' is a 'species'"
// C: name and species should have 1st letter capitalized 
function profileInfo(object) {
 // return phrase with name and species of the object with first letter capitalized
 // utilize the function we created earlier to capitalize first letter
 // use dot notation to access the name and species values of the object 
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    //I: object 
    //O: return noises array as a string 
    //C:  return the words of the string separated by spaces 
    //E: make sure it has a noises array, If there is no noise 
    //   array or the array.length is 0 return "there are no noises"
function maybeNoises(object) {
 // use for in loop to pull out keys    
    for( let key in object){ 
// check if the key says noises and the value of that key has a length greater than 0 and 
// is an array 
        if(object[key].length > 0 && Array.isArray(object[key]) && key === 'noises'){
 // then return the value of that noises key which is an array and .join with spaces to 
 // combine the items in the array with spaces into a string 
        return object[key].join(' ');
        }   
 // if those first conditions aren't met then return "there are no noises "        
    }
    return "there are no noises"; 
}

// 2nd option to solve above problem
// function maybeNoises(object){
//     if ((arrayOrObject(object.noises) === 'array') && object.noises.length > 0){
//         return object.noises.join(' ');
//     }
//     return "there are no noises"; 
// }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: string of words and word 
// O: return true if word is in string and false if it is not 

// you could also use a ternary statement like this
// return (string.includes(word)? true: false;)
function hasWord(string, word) {
 // check to to see if the string includes the word given    
     if(string.includes(word)){
// if it does return true          
        return true;
     }
// if it doesn't return false     
     return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name and object 
// O: return object with name in object's friends array
function addFriend (name, object) {
 // access the friends array on the object with dot notation then push the name onto that array  
        object.friends.push(name);
// return the object which now also includes that name         
        return object; 
    

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name and object
// O: return true of name is in friends array of object and false otherwise
function isFriend(name, object) {
// use dot notation to access the friends array 
// check if the name given is included on the friends array and if a friends array even exists
// also check if its an array 
    if(object.friends && object.friends.includes(name) && arrayOrObject(object) !== 'array'){
 // if all these conditions pass then return true
        return true;
    }
// otherwise return false     
 return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: name and array of  objects which have a 'names' key and 'friends' key(this holds array)
// O: return list of all the names that the 'name' is not friends with
// C: 
// E: 

//Logic note: if the name is not in the .name attribute 
//or the .friends attribute then it is one of the nonfriends
function nonFriends(name, array) {
// create empty array to collect data 
    let notFriendsList = [];
// loop through the array     
    for( let i =0; i < array.length; i++){
//check if the name given matches the name value on the object
// also check if the names listed in friends array in the object doesn't match the object.name 
        if(name !== array[i].name && (!array[i].friends.includes(name))){
// if the name is the object.name or in the friends array while looping through the object.name
// then it must be one of the non friends and you can push it onto the empty array 
           notFriendsList.push(array[i].name); 
        }
    }
// return that array and that is your non friends list     
    return notFriendsList; 
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object, key , value 
// O: object with value added to key 
// C:
// E: If key doesn't already exist then create it 
function updateObject(object, key, value) {
// use for in loop to iterate through the object    
    for(let keys in object){
// if the key parameter matches the key of the object
        if(keys === key){
// then make the value parameter its value            
             object[keys] = value;
        }else{
// otherwise just create a new object key with the key parameter and the value parameter             
            object[key] = value;
        }
// return the final object         
      return object;  
    } 

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: object, array of strings 
// O: return object with keys that match strings removed 
function removeProperties(object, array) {
//use for in loop to iterate through object    
    for( let key in object){
// use for loop then to look through the array         
        for ( let i =0; i < array.length; i++){
// check if the key item in the object matches the item in the array             
            if ( key === array[i]){
// if they do match then delete that item from the object                 
                delete object[array[i]];
            }
        }
    }
// return the object with the item deleted     
    return object; 

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: array
// O: return that array with all the duplicates removed 
function dedup(array) {
// create empty array to collect data     
    let newArray = [];
// use for loop to iterate through array 
    for( let i= 0; i< array.length; i++){
        if(!newArray.includes(array[i])){
   // as you iterate through each item you will push it onto the empty array 
   // so you will be checking to see if that item is already in the array then 
   // don't push it again 
        newArray.push(array[i]);
        }
    }
// return the new array which will exclude any duplicates     
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}