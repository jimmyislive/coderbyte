/*
Have the function StringScramble(str1,str2) take both parameters being passed and return true if a portion of str1 characters can be rearranged to match str2, otherwise return false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function StringScramble(str1,str2) { 

  var char_index = 0;
  
  for (var i = 0; i < str2.length; i++) {
    char_index = str1.indexOf(str2.charAt(i));
    if ( char_index === -1) {
      return false;
    } else {
      str1 = str1.substring(0, char_index) + str1.substring(char_index + 1);
    }
  }
  
  return true;
            
}
   
// this call is needed to test your function
// keep this when you submit your code
StringScramble(str1,str2)        

