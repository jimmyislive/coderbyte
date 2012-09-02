/*
Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function TimeConvert(num) { 

  var hours = Math.floor(num/60);
  var minutes = num % 60; 
  
  return hours + ':' + minutes;
            
}
   
// this call is needed to test your function
// keep this when you submit your code
TimeConvert(num)        


  
