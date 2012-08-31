/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function LetterChanges(str) { 
  
  var VOWELS = 'aeiou';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var new_str = '';
  var newer_str = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'z'){
      new_str += 'a';
    } else if (LOWER.indexOf(str.charAt(i)) != -1 ){
      new_str += LOWER[LOWER.indexOf(str.charAt(i)) + 1];
    } else {
      new_str += str.charAt(i);
    }
  }
  
  for (var j =0; j < new_str.length; j++) {
    if (VOWELS.indexOf(new_str.charAt(j)) != -1) {
      newer_str += new_str.charAt(j).toUpperCase();
    } else {
      newer_str += new_str.charAt(j);
    }
    
  }
  
  return newer_str;
}
   
// this call is needed to test your function
// keep this when you submit your code
LetterChanges(str)        

