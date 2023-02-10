/* HW 3
   Example 18 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 18");

//Break Test
//a. What is the output of the following?
const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
    break;
  case "def":
    console.log("x = def");
    break;
}
//b. What is the output of the following?
const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
    //no break
  case "def":
    console.log("x = def");
    break;
}