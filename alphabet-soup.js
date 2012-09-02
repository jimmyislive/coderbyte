/*
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function AlphabetSoup(str) { 
  
    var arr = str.split('');
  
    arr.sort();
    return arr.join('');
            
}
   
// this call is needed to test your function
// keep this when you submit your code
AlphabetSoup(str)        


