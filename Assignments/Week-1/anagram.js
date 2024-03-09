/*
    Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
    What's Anagram?
    - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function simplifyString(str) {
    return str
    .toLowerCase()
    .replace(/[.,\/#@!"'$%\^&\*;:{}=\-_`~()]/g, "")
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .trim();
}

function isAnagram(str1, str2) {
    const srting1 = simplifyString(str1);
    const srting2 = simplifyString(str2);
    return srting1 === srting2;
}

const sentence1 = "ELECTION RESULTS";
const sentence2 = "LIES - LET'S RECOUNT!";

const result = isAnagram(sentence1, sentence2);
console.log(result);
