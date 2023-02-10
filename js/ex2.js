/* HW 3
   Example 2 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 2");

let name = prompt("Enter your name: ");
let units = prompt("Enter the number of units completed: ");
units = parseInt(units);

if (isNaN(units) || units < 0 || units == 0 || units % 1 !== 0) {
  console.log("Invalid input");
} else {
  let gradeStanding;
  if (units < 30) {
    gradeStanding = "Freshman";
  } else if (units >= 30 && units < 60) {
    gradeStanding = "Sophomore";
  } else if (units >= 60 && units < 90) {
    gradeStanding = "Junior";
  } else {
    gradeStanding = "Senior";
  }
  console.log(`Hello ${name} \nYour grade standing is ${gradeStanding}`);
}