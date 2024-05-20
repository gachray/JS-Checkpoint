//String Manipulation Functions - Reverse a String: Write a function that reverses a given string.
let original = "Hello World";
let reversed = original.split('').reverse().join('');
console.log(reversed);

//String Manipulation Functions - Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
  }

  const str = "My name is Raymond";
const numCharacters = countCharacters(str);
console.log(numCharacters); // Output: 18

//String Manipulation Functions - Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

const mySentence = "kenya is a beautiful country";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

const capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);




//Array Functions - Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMinMax() {
	let Arr = [50, 60, 20, 10, 40];

	let minValue = Math.min(...Arr);
	let maxValue = Math.max(...Arr);
	
	console.log("Minimum element is:" + minValue);
	console.log("Maximum Element is:" + maxValue);
}

findMinMax()


//Array Functions - Sum of Array: Create a function that calculates the sum of all elements in an array.
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);


//Array Functions - Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}




//Mathematical Functions - Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const n = 5;
  const result = factorial(n);
  console.log(result); 

  //Mathematical Functions - Prime Number Check: Create a function to check if a number is prime or not.
  function isPrime(n) { 
    // Check if n=1 or n=0 
    if (n <= 1) 
        return false; 
    // Check if n=2 or n=3 
    if (n == 2 || n == 3) 
        return true; 
    // Check whether n is divisible by 2 or 3 
    if (n % 2 == 0 || n % 3 == 0) 
        return false; 
    // Check from 5 to square root of n 
    // Iterate i by (i+6) 
    for (var i = 5; i <= Math.sqrt(n); i = i + 6) 
        if (n % i == 0 || n % (i + 2) == 0) 
            return false; 
    return true; 
} 

let userInput = prompt("Enter a number:");
let number = parseInt(userInput, 10); 
isPrime(number) ? console.log(`${number} is a prime number.`) : console.log(`${number} is not a prime number.`);



  //Mathematical Functions - Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  const n = 10;
const sequence = fibonacci(n);
console.log(sequence); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
