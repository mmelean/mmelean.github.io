// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// create object that will insert the parameters into the values matching their keys    
    return {id: id , nameFirst: nameFirst, nameLast: nameLast};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. Make an empty array that will collect the contacts as they are made.
     */
     let contacts = [];
   
    // return object with the following keys: length, addContact, findContact, removeContact, and prinAllContacts
    // create functions as their values
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    // the add contact will push a given contact into the contacts array we created    
        addContact: function(contact){
            contacts.push(contact);
        },
    // the find contact uses a given full name parameter, so when we put a name in as an argument it will return the entire contact
    // to find the name first use a for loop to search through the contact array
    // check to see if the nameFirst and nameLast values match the full name we passed in 
        findContact: function(fullName){
            
            for(let i = 0; i< contacts.length; i++){
            if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast){
    // when it is found return the contact            
                return contacts[i];
                }
            }    
        },
    // the remove contact function with take a contact parameter and return the contacts array with that specific contact removed     
        removeContact: function(contact){
    // first use for loop to search through contacts array         
            for (let i = 0; i< contacts.length; i++){
    // if a match is found then delete the contact that matches the argument using splice            
                if(contacts[i] === contact){
    // splice(i,1) uses the i as the index in the array where the item will be removed and the 1 signifies the amount of items to be removed
                  contacts.splice(i,1);
                }
                
            }
        },
    // the print all contacts function will print a list of only the contact names and list them out on separate lines as a list
        printAllContactNames: function(){
    // first create an empty array to collect the data of names
            let nameList = [];
    // use a for loop to iterate through the contacts array and on each loop pull out the first and last name and push that data 
    // onto our empty array
            for(let i = 0; i< contacts.length; i++){
            
                nameList.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            }
    // return that array with the names but convert it to a string by using .join with the /n new line character to separte each name into
    // list form 
            return nameList.join('\n');
        }
        
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
