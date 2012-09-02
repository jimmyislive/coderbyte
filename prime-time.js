/*
Have the function PrimeTime(num) take the num parameter being passed and return true if the parameter is a prime number, otherwise return false. The range will be between 1 and 2^16. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function PrimeTime(num) { 

  for(var i = 2; i < num; i++) {
    if ((num % i) == 0) {
      return false;
    }
  }
  
  return true;
            
}
   
// this call is needed to test your function
// keep this when you submit your code
PrimeTime(num)        


