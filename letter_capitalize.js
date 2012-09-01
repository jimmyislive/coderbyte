/*
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function LetterCapitalize(str) { 
  
  var words = str.split(' ');
  var new_str = '';
  var letters;
  
  for (var i =0; i < words.length; i++) {
    letters = words[i].split('');
    new_str += letters[0].toUpperCase() + letters.join('').substring(1) + ' ';
  }

   return new_str;
}
   
// this call is needed to test your function
// keep this when you submit your code
LetterCapitalize(str)        



