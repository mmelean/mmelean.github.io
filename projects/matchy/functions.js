/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: array of objects and string 
// O: if the name value in the object in the array equals the string name return that object
//.   otherwise if it doesn't match return null ('nothing') 
function search(array, string){
// use for loop to search through array     
    for( var i = 0; i < array.length; i++){
// check if the name in each item matches the string given        
        if(string === array[i].name){
// if it does then return that item             
            return array[i];
        }
       
    }
// otherwise return null     
    return null; 
}
    


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: array of animals, string , and object 
// O: if the name given is found in the animals array then replace it with the replacement object
function replace(animals, name, replacement){
// use for loop to look through array
    for( var i = 0; i < animals.length; i++){
// use dot notation to see if the name value of the animal object in the array matches the string (name)        
        if(name === animals[i].name){
// use .splice to delete that item if found and insert replacement object             
            animals.splice(i,1,replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: array of animals and name (string)
function remove(animals, name){
// use for loop to look through array to see if name matches a name in the animals array of objects   
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
// use .splice to then delete that item if found             
            animals.splice(i,1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: array, object 
// O: array unchanged or with the new object added 
// C: If the object has a name value and species value that exists and its name 
//.   doesn't match a name in the array then add that object onto the array 
function add(array,object){
// create a baseline status that there are no duplicate names by assigning it to false    
    let duplicateName = false; 
// use for loop to search through the array to see if the object name matches a name in the array    
        for( var i = 0; i < array.length; i++){
            if(object.name === array[i].name) {
// if there is a name then the duplicate status becomes true because a match was found                 
            duplicateName = true; 
            }
        }    
// Now if a name and species exist on the object and no duplicate name was found in the array        
        if(object.name.length > 0 && object.species.length > 0 && duplicateName === false) {
 // then you can push the object onto the array        
        array.push(object);
    }
// finally return that array either unchanged or with the new item pushed onto it     
 return array; 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
