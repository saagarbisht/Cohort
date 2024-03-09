/*
    Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
    Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    const orignalString = str.toLowerCase().replace(/\s/g, "").replace(/[^\w\s]|_/g, "")
    const reverseString = orignalString.split("").reverse().join("");
    return orignalString === reverseString;
}

const result = isPalindrome("Never odd or even")
console.log(result);