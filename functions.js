/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	// Input: inputString is a string. 
	// Example: 'string'. 
	// Output: Return true or false (boolean).
	if(typeof inputString === 'string') {
		return inputString.length === 3;
	} else {
		throw('Input must be a string.');
	}
};

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	// Input: a and b are arrays of intergers. 
	// Examples: a = [1,2,3,4], b = [5,6,7,8].
	// Output: Return an array of integers.
	if(!Array.isArray(a) || !Array.isArray(b)) {
		throw new Error('Invalid Input');
	}
	if(Array.isArray(a) && Array.isArray(b)) {
		return a.concat(b)
	}
};

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	// Input: noun is a lowercase string. 
	// Example: 'london'. 
	// Output: Return string with capitalized letter.
	if(typeof noun !== 'string') {
		throw new Error('Invalid Input');
	} 
	else if (noun.charAt(0) === noun.charAt(0).toUpperCase()) {
		return true;
	}
	else {
		return false;
	} 
};

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	// Input: inputString is a string.  
	// Example: 'schnauzer'
	// Output: Return a string in alphabetical order. 'schnauzer' -> 'acehnrsuz'
	if(typeof inputString === 'string') {
		var arrCharacters = inputString.split('');
		var alphabetical = arrCharacters.sort();
		return alphabetical.join('');
	} 
	else {
		throw new Error('Invalid Input');
	}
};

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	// Input: integer is a number.
	// Example: 5
	// Output: Returns a number.
	// your code goes here
};

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function myMin(num1, num2) {
 	// Input: num1 and num2 are numbers.
 	// Example: 3, 2
 	// Output: Return (smaller) number. 
 };

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

 function myMax(arr) {
 	// Input: arr is an array of integers.
 	// Example: arr = [1, 2, 3, 4]
 	// Output: Return (the largest) number.
 };

/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function getMonth(number) {
 	// Input: number is a number.
 	// Example: 4
 	// Output: Should return a string value (month).
 };

/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

 function randomElement(arr) {
 	// Input: arr is an array of values.
 	// Example: arr = ['shia labeouf', 2, '19', 7, 'batman']
 	// Output: Return a value from array.
 };

/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(arr) {
	// Input: arr is an array of strings.
	// Example: arr = ['jen', 'maria', 'dana', 'will', 'haythem', 'nate']
	// Output: Return an array of (pair) arrays.
};

/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function sumSquares(N) {
	// Input: N is a number (positive, non-zero integer).
	// Example: 8
	// Output: Return a number (sum of squares of given integers.)
};

/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function findMaxDiff(arr) {
	// Input: arr is an array of integers.
	// Example: arr = [3, 8, 12, 31, 99]
	// Output: Return a number (the maximal difference between two adjacent elements)
};

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function insertDashes(inputString) {
	// Input: inputString is a string (sentence).
	// Example: inputString = 'This is a short sentence.'
	// Output: Return a string with dashes between letters. 
};

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function mySubstring(inputString) {
	// Input: inputString is a string.
	// Example: inputString = 'This is an example string.'
	// Output: A substring of the original string. Ex: 'example'
};

/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function splitSwap(arr) {
	// Input: arr is an array.
	// Example: arr = ['hello', 2, 'how are you?', 9, 'bob']
	// Output: An array (with halves swapped).
};

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function smallMultiples(n, k) {
	// Input: n and k are numbers.
	// Example: 12, 2
	// Output: a number (number of multiples of k that are less than n).
};

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function rot13(inputString) {
	// Input: inputString is a string (with lowercase alphabetic characters).
	// Example: inputString = 'help me'
	// Output: A string (in ROT-13 encryption)
};

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function derot13(rot13String) {
	// Input: rot13String is a ROT-13 encrypted string in lowercase alphabetic char.
	// Example: rot13String = ''
	// Output: An unencrypted string.
};

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

 function rotn(inputString, n) {
	// Input: inputString is a string; n is a number.
	// Example: inputString = 'help me'
	// Output: A ROT-N encrypted string.
};

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function findBoth(a, b) {
	// Input: a and b are arrays of integers.
	// Example: a = [2, 4,, 6, 8]; b = [8, 10, 12, 14]
	// Output: An array (of elements that are found in both a and b). 
};

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function countBoth(a, b) {
	// Input: a and b are arrays of integers.
	// Example: a = [1, 3, 5, 7]; b = [3, 5, 7, 9]
	// Output: A number (count) of elements that appear in both a and b.
};

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function isDiagonalMatrix(matrix) {
	// Input: matrix is an array of arrays of numbers.
	// Example: 
		//[ [1, 0, 0]
		// 	[0, 2, 0]
		// 	[0, 0, 3]
		//]
	// Output: Return true/false (boolean).
};

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function isAnagram(arr1, arr2) {
	// Input: arr1 and arr2 are arrays of strings (of equal length).
	// Example: arr1 = ['cinema', 'shot', 'aba', 'rain']; arr2 = ['iceman', 'hots', 'bab', 'train']
	// Output: An array with boolean (true/false) values.
};

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function validateParentheses(inputString) {
	// Input: A string of parentheses.
	// Example: inputString = ')([]{'
	// Output: Return true/false (a boolean).
};

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

 function flattenArray(arr) {
	// Input: arr is an array (of any type of element).
	// Example: arr = [1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]
	// Output: An array of elements (where previous elements that were arrays are non-arrays.)
};

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};