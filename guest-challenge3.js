/*
Using the JavaScript language, have the function guestChallenge(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 50. Use the Parameter Testing feature in the box below to test your code with different arguments. Do not modify the function name within the code. Do not put any code outside of the function and use the return keyword to return your answer from within the function.
*/

function guestChallenge(num) {
    if (num < 2) {
        return 1;
    }
    else {
        return num * guestChallenge(num - 1);
    }
}

