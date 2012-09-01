/*
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function SimpleSymbols(str) { 

  var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  
  for (var i = 0; i < str.length; i++) {
    if (LETTERS.indexOf(str.charAt(i)) != -1) {
      if (i > 0 && i < (str.length - 1)) {  
        if (str.charAt(i - 1) != '+' || str.charAt(i + 1) != '+') {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  
  return true;
}
   
// this call is needed to test your function
// keep this when you submit your code
SimpleSymbols(str)        


  

