/*
Have the function PalindromeTwo(str) take the str parameter being passed and return true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function PalindromeTwo(str) { 

  var LETTERS = 'abcdefghijklmnopqurstuvwxyz';
  var new_str = '';
  var start;
  var end;
  
  for (var i = 0; i <= str.length; i++) {
    if (LETTERS.indexOf(str.charAt(i).toLowerCase()) != -1 ) {
      new_str += str.charAt(i).toLowerCase();
    }
  }
  
  
  start = 0;
  end = new_str.length - 1;
  
  while (end > start) {
    if (new_str.charAt(end) != new_str.charAt(start)) {
          return false;
    }
    end -= 1;
    start += 1;
  }
  
  return true;
            
}
   
// this call is needed to test your function
// keep this when you submit your code
PalindromeTwo(str)        


