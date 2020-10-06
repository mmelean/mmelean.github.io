// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-mmelean");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// I: array with objects
// O: number indicating number of male customers

// filter through items(objects) in array to find those with the gender of male and return
// the length of that new array to get the number count

var maleCount = function(array) {
    return customers.filter(function(e,i){
        if(customers[i].gender === 'male'){
            return e;
        }
    }).length;
};

// I: array
// O: number of females in array 

// filter out the objects in the array that have a gender of female using reduce to 
// add 1 each time an item is a female, then return that final accumulated number of females
// use 0 as the seed to start the count 
var femaleCount = function(array){
    return customers.reduce(function( females, customer){
        
        if(customer.gender === 'female'){
            females++;
        }     
        return females;
    },0);
};

// I: array of objects 
// O: string : oldest customers name 

// need to get the ages of all the customers , sort through them to find the oldest and 
// then return the oldest one's name . One way to do that is get array of ages,sort and then only 
// access the first item and set that as the age variable to look for. 
// Then use each to search through array and compare the ages to your variable, when it finds 
// a match return the name property of that element 

//let oldestCustomer = function(array){
//  let oldest = array.map(function(e){ 
//     console.log(e.age);
//   }).sort(function(a, b){return b-a})[0];
// let oldestName = '';
// each(array, function(e,i,a){       
//     if(e.age === oldest){  
//       oldestName = e.name; 
//     }  
//   });
// return oldestName; 
// }

// Here is a more efficient way: 
// create baseline variable that holds an object for which age is 0 so you can compare ages
// use each to loop through items and if the age value on your element is greater than the 
// age value on your baseline variable then replace it with that element therefore placing the 
// oldest customer in there
// then just return the name value of that customer 
var oldestCustomer = function(array){
    let oldest = {age:0};
    _.each(array, function(e, i, array){
        if(e.age > oldest.age){
            oldest = e;
        }
    });
    return oldest.name;
    
}; 

// create baseline object with high age
// use each to loop through array and compare the age values to our object's age
// as it loops through always replace what it there with a younger value element 
// In the end return that element's name
var youngestCustomer = function(array){
    let youngAge = {age:120};
    _.each(array, function( e, i, array){
        if (e.age < youngAge.age){
            youngAge = e;
        }
    });
    return youngAge.name;
};

// I: array
// O: number containing the average balance of all the customers 

// Using reduce pull the expenses out of the array as number values and sum them up 
// to get them as number values remove the $ sign with .slice and remove the , with split and join
// then apply Number() to make the new string a number 
// use 0 as the seed so it starts at 0 
// set that equal to a variable and then divide that return value by the array.length which
// should give you the average 
let averageBalance = function(array){
  let totalExpenses = _.reduce(array, function(acc, e){
     return acc + Number(e.balance.slice(1).split(",").join(''));

  },0);
  
 return totalExpenses/(array.length);
};

// I: array, letter
// O: number of names in customers array that begin with a given letter 
// get an array with all the names that begin with the letter then access the length of 
// the array and that should give you the count 
var firstLetterCount = function(array,letter){
   return _.filter(array,function(e){
        return e.name[0].toUpperCase() === letter.toUpperCase();
    }).length;
};

// I: array, customer, letter
// O: number of friends of given customer whose names start with the given letter

// create empty array to collect data 
// loop to pull customer whose name matches the <customer>  then loop through that customers friends
// list to see which name starts with the given letter and push that onto the array
// finally just return the length of that new array
var friendFirstLetterCount = function(array,customer, letter){
     let friend = [];
    _.each(array, function(e, i, array){
        if( e.name === customer){
            _.each(e.friends, function(b, i, array){
                if( b.name[0].toUpperCase() === letter.toUpperCase()){
                    friend.push(b);
                }
            }
            
        );
    }
    });
    return friend.length;
};

// I: array, name 
// O: array with names of customers who have the given cutomer's name in their friends list 

// loop through the customers friends and check for the given <name> then return the elements
// names whose friends list contained the given <name> 

var friendsCount = function(array,name){
    let arrayNames = [];
    _.each(array,function(e, i, array){
        _.each(e.friends, function( b, i, array){
          if(b.name.includes(name)){
            arrayNames.push(e.name);
          }
       });
    });
    return arrayNames;
};

// I: array of objects
// O: array of the top three tags so an array of 3 strings 

// First pull all the tags together into one big array by using pluck method which pulls subarrays
// into one big array then loop through the subarrays with each and concat all the items into 
// one big array 
// Use reduce to create an object that will tally up the amount of times each word shows up
// Use Object.entries then to take those object items and convert them to subarrays 
// Then sort through the subarrays by their number or the [1] index to show the highest number 
// at the top 
// Then use splice to cut off the top three subarrays 
// Finally use map to just return the word items from those 3 subarrays into a final array of the
// top three tags 

var topThreeTags = function(array){
    let fullList = [];
  let tagArrays = _.pluck(array,"tags");
    _.each(tagArrays,function(e, i ,a){
      
      fullList = fullList.concat(e);
    });
  
 let newObj =  fullList.reduce(function(acc, e, i){
        if( acc[e]){
            acc[e] ++;
        }else {
            acc[e] = 1;
        }
        return acc;
    },{});
  
  let arrayList = Object.entries(newObj);
  let finalArray = arrayList.sort(function(a,b){return b[1]- a[1]}).splice(0,3);
  return _.map(finalArray,function(e,i){
    return e[0];});
};

// I: Array of objects 
// O: Object with genders as keys and the total number of each gender as the values
// C: Use reduce 

// with reduce use the seed as {} to initialize an object then set the genders as keys so if 
// the key doesn't exist create it and set it's value to 1 then each time it runs into 
// that key it will add one to the count. 
var genderCount= function(array){
   return _.reduce(array, function(genderObj, cust){
        if(genderObj[cust.gender]){
            genderObj[cust.gender]++;
        }else{
            genderObj[cust.gender] =1;
        }
        return genderObj;
    }, {});
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
