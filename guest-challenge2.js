
/*
Using the JavaScript language, have the function guestChallenge(str) take the str parameter being passed, and return the string in reversed order. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function guestChallenge(str) {
    var arr = [];
    arr = str.split('');
    arr.reverse();
    return arr.join('');
}
