/* HW 3
   Example 12 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 12");

//Variable Scope: What is the output of the following?
let num1 = 0;
{
  num1 = 1; 
  const num2 = 0;
}
console.log(num1); 
console.log(num2); 