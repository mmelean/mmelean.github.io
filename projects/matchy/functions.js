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
function search(array, string){
    for( var i = 0; i < array.length; i++){
        if(string === array[i].name){
            return array[i];
        }
       
    }
    return null; 
}
    


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for( var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i,1,replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i,1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array,object){
     
    
    let duplicateName = false; 
        for( var i = 0; i < array.length; i++){
            if(object.name === array[i].name) {
            duplicateName = true; 
            }
        }    
        if(object.name.length > 0 && object.species.length > 0 && duplicateName === false) {
        
        array.push(object);
    }
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
