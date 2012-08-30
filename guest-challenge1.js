/*
Using the JavaScript language, have the function guestChallenge() add up all of the numbers from 1 to 1000. But everytime a number that contains a 7 is reached, don't add that number to the others (ie. exclude 7, 17, 370, etc). Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function guestChallenge() { 

  var i = 0;
  var sum = 0;
  
  while (i < 1001) {
    if (i.toString().indexOf('7') == -1) {
      sum += i;
    }
    i++;
  }
  
  return sum;
            
}

