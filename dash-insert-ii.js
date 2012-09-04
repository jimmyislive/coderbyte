function DashInsertII(num) { 

  var num_str = num + '',
      str = '';
  
  for (var i = 0; i < num_str.length - 1; i++) {
    
    var current_digit = parseInt(num_str.charAt(i)),
        next_digit = parseInt(num_str.charAt(i + 1));
       
    if (!current_digit || !next_digit) {
      str += current_digit;
    } else if ((current_digit % 2) && (next_digit % 2)) {
      //odd number
      str += current_digit + "-";
    } else if ((current_digit % 2 === 0) && (next_digit % 2 === 0)) {
      //even number
      str += current_digit + "*";
    } else {
      str += current_digit;
    }
  }
  
  str += next_digit;
  
  return str;          
}
   
// this call is needed to test your function
// keep this when you submit your code
DashInsertII(num)        

