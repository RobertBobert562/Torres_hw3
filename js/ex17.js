/* HW 3
   Example 17 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 17");

//Short Circuit Test

//a. What is the output of the following?
let i = 1;
if ((1 > 2) && i++) {
   //Nothing.  Want to test condition
}
console.log(`The value of i is: ${i}`);

//b. What is the output of the following?
let i = 1;
if ((1 < 2) && i++) {
   //Nothing.  Want to test condition
}
console.log(`The value of i is: ${i}`);