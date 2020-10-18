
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
   // use for loop with initial point being one '#' and the end point length being the given num
   // increment by one '#' on each loop 
  for(let i = '#';i.length <= num; i+='#'){
  // console.log each loop which should add the given number of rows of #'s 
  console.log(i);
  
  }
  

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
  //use for loop to indicate the start at num1 and end at num2
  for(let i = num1; i <= num2; i++){
// first rule out if its a factor of 5 and 3 print fizzbuzz    
    if( i % 5 ===0 && i % 3===0){
      console.log('fizzbuzz');
// if its a factor of 5 print buzz      
    }else if( i%5 ===0){
      console.log("buzz");
// if its a factor of 3 print fizz       
    }else if( i % 3 === 0){
      console.log('fizz');
// otherwise print the number       
    }else{
      console.log(i);
    }
      
    
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
// baseline variable is an empty string
  let chessrow = "";
// use two loops one to indicate spaces accross and one for rows which 
//both have the same number 
  for( let i = 0; i < num;i++){
    for( let j = 0; j< num; j++){
// for even spots if adding the variables for across and up and down are
// even then put an empty space
    if((i + j)% 2 === 0){
      chessrow += " ";
    }else {
// otherwise place a number sign, this should alternate them       
      chessrow += '#';
    }
  }
// tack on a new line character at the end of each chess row to 
// create chessboard appearance as opposed to one long line 
   chessrow += "\n";
  }
// at the end console.log chessrow   
 console.log(chessrow);  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
