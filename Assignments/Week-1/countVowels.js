/*
	Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
	Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

	Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	let vowelCount = 0;
	const vowels = ["a", "e", "i", "o", "u"];
	const arrayOfString = str.toLowerCase().trim().split("");
	arrayOfString.forEach((char) => {
		vowels.forEach((vowel) => {
			if (vowel === char) {
				vowelCount++;
			}
		});
	});
	return vowelCount;
}

const string = "Hello Everyone my name is Sagar Bisht";
const result = countVowels(string);
console.log(result);
