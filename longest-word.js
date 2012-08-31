/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function LongestWord(sen) { 

  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqurstuvwxyz';
  var current = 0;
  var index = 0;
  var longest = 0;
  var words = [];
  
  words = sen.split(' ');
      
  for(var i = 0; i < words.length; i++) {
    for(var j = 0; j < words[i].length; j++) {
      if (UPPER.indexOf(words[i].charAt(j)) != -1 || LOWER.indexOf(words[i].charAt(j)) != -1) {
        current += 1;
      }
    }
    
    if (current > longest) {
      longest = current;
      index = i;
    }
    
    current = 0;
  }
            
  return words[index];
}

//coderbyte   
// this call is needed to test your function
// keep this when you submit your code
LongestWord(sen)        

