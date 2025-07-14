// utils.js

// 1. Sum of all numbers in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 2. Filter only odd numbers from an array
  function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // 3. Reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 4. Delay function that returns a Promise
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Exporting all functions
  module.exports = {
    sumArray,
    filterOdd,
    reverseString,
    delay
  };
  