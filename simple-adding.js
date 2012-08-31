/*
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function SimpleAdding(num) { 

  var i = 1;
  var sum = 0;
  
  while (i <= num) {
    sum += i;
    i += 1;
  }
  
  return sum; 
            
}
   
// this call is needed to test your function
// keep this when you submit your code
SimpleAdding(num)        



