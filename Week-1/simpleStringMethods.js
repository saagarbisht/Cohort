//  some string methods

const introduction = "Greeting mam/sir, My name is Sagar Bisht, I'm Currently a second year student pursuing a Bachelors of Computer Application from Siddhi Vinayak Institute , Bareilly. In my studies i have Particularly enjoyed courses related to development, and with your guidance i want to further more extend my knowledge in this domain"

// getting the length of the entire string
const stringLength = introduction.length;
console.log(stringLength)

// getting the index of a certain world from the start of entire string
const firstIndex = introduction.indexOf("Sagar")
console.log(firstIndex);

// getting the index of a certain world from the start of entire string
const lastWordIndex = introduction.lastIndexOf("Sagar")
console.log(lastWordIndex);

// a sclice of the string
const sclicedString = introduction.slice(0,40);
console.log(sclicedString)

// replace a part of a string 
// it search the string from the start 
const newStr = introduction.replace("second","third");
console.log(newStr);

// split the string into elemnts of array
const arrayOfString = introduction.split(",");
console.log(arrayOfString)

// to delete emplty space before and after the string
const newString = "    Sagar Bisht    ";
console.log(newString.trim())

// to captalize and to lower case
const upperCase = newString.toUpperCase();
const lowerCase = newString.toLowerCase();
console.log(upperCase)
console.log(lowerCase)


