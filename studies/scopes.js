/**
 * Scopes: These are areas where variables can be used and referenced once they are declared.  
 * 
 */
 
 
 //1. What is scoping?
 //.  Scoping is a way to delineate areas where code variables can be created and used. 
 
 //2. What are the different scopes in JavaScript?
 //.  There are 3 different levels of scopes.  You can think of them as nested boxes. Each within the other. From within each box you can 
 //   reach out to access a variable in the parent scope but you cannot reach down into a nested box to access it's variable. These different
 //   types include global scope which is outermost scope. Then there is the function or local scope which is the scope within the function. 
 //.  Function scope can also contain block scopes.  These include the code block that is included in if/ else statements which each will have block
 //.   scopes.  
 //.   Loops also contoin block scopes within their code blocks. 
 // EXAMPLE: 
 function build(){         // function has created a scope within its code block so the variable var is local scoped and cannot be accessed outside its scope
  var tools = 'nails';
  return "I need " + tools + ".";
 }
 
 
 //3. What variables are bound to these scopes?
 //.  Var is global and local scoped but not block scoped. Whereas let and const are block scoped and function scoped. 
 //.  EXAMPLE:
 //.  In above example you can see that var was declared inside the function it is therefore local scoped. 
 // console.log(tools);  // This will return an error because you cannot access the var variable outside it's function  
 
 

 //4. There is a variable in the global scope and a parameter with the same name, 
 //   if you are within the function body which would you access? If you were in the global scope which would you access? Why?
 
 // If you are withing the function body you would be referring to the parameter because you are working within the scope of the function. 
 // If your are working in the general global scope then you would access the variable that used in the global scope.  You cannot reach down from the 
 // global scope into the local scope to access the parameter that is used in the function. 
 
 
