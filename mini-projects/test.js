
const { sumArray, filterOdd, reverseString, delay } = require('./utils');

console.log(sumArray([1, 2, 3, 4]));         // 10
console.log(filterOdd([1, 2, 3, 4]));        // [1, 3]
console.log(reverseString("hello"));        // "olleh"

(async () => {
  console.log("Waiting...");
  await delay(2000);
  console.log("2 seconds passed");
})();
