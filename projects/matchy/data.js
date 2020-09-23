/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use an object literal for the variable animal
var animal = {};
// use dot notation and bracket notation to assign new key/value pairs 
animal.species = "dogs";
animal['name'] = "Dingo";
// create another key and make its value an empty array 
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create noises array by assigning it to an array literal
var noises = [];
// use bracket notation to assign a noise to the first index 
noises[0] = "woof";
//use .push method to add another noise to the end

noises.push("arf");
// use the unshift method to add a noise to the beginning of the array
noises.unshift("bark");
// add a noise to the end using noise.length 
noises[noises.length] = "grrr";
// print the length of the array 
console.log(noises.length);
// print the last item 
console.log(noises.length -1);
// print the whole array 
console.log(noises); 

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create noises key using bracet notation that will be assigned the noises
// array we created above as its value
animal['noises'] = noises;
// now push another noise onto this array
animal.noises.push( "howl");
console.log(animal);




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create animals variable that is assigned to empty array
var animals = [];
// push the animal object onto the animals array
animals.push(animal); 
console.log(animals);
// create a duck variable that holds an object with details about the duck
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// add this duck object onto the animals array as well 
animals.push(duck);
console.log(animals);
// create a couple more animal objects and push those onto the animals array
var cat ={
    species: "feline",
    name: "Sheila",
    noises: ['purr', 'hiss']
};
var fish ={
    species: "fish",
    name: "Darrell",
    noises: ["burp", "slurp"]
};
animals.push(cat,fish); 
console.log(animals); 
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// arrays are good for displaying list-type data 
// create variable called friends, assign it to empty array
var friends = [];
// create function called getRandom which will pull random index from animals array
// use Math.random() which gives us random number between 1 and .999. 
// multiply it by the length of the array so it will include all the index numbers
// attach Math.floor so its a clear number with no decimals
function getRandom(){
    return Math.floor(Math.random() * animals.length);
}
// use that random index to push a randon animals name onto our friends array
friends.push(animals[getRandom()].name);
console.log(friends); 
// using bracket notation add key friends to one of the animals and set 
// the value equal to our friends array
cat["friends"] = friends;
// print this updated animal to the console showing the addition of the friends array
console.log(animals.cat); 


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}