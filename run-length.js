/*
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function RunLength(str) { 

  var count = 0;
  var boundary = false;
  var prev = '';
  var new_str = '';
  
  if (str.length == 1) {
    return 1 + str;
  }
  else {
    for(var i = 0; i< str.length; i++) {
      if ( i == 0) {
        count = 1;
        prev = str.charAt(0);
        continue;
      }
      
      if (str.charAt(i) == prev) {
        count += 1;
      } else {
        new_str += count + prev;
        count = 1;
        prev = str.charAt(i);
      }
    }
    
    new_str += count + prev;
  }
  
  return new_str;
            
}
   
// this call is needed to test your function
// keep this when you submit your code
RunLength(str)        
  


