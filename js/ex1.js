/* HW 3
   Example 1 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 1");

let num = prompt("Enter a number between 1 and 100: ");
num = parseInt(num);

if (isNaN(num) || !Number.isInteger(num) || num < 1 || num > 100) {
  console.log(`Sorry, ${num} is not a valid entry.`);
} else {
  console.log(`Thank you! You entered ${num}, a valid number.`);
}