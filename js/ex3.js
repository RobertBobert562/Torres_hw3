/* HW 3
   Example 3 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 3");

const day = prompt("Input a day of the week (ex. sun, mon, tue, wed, thu, fri, sat): ");

switch (day) {
  case "sun":
    console.log(`You entered: ${day} \nThe following day is: mon`);
    break;
  case "mon":
    console.log(`You entered: ${day} \nThe following day is: tue`);
    break;
  case "tue":
    console.log(`You entered: ${day} \nThe following day is: wed`);
    break;
  case "wed":
    console.log(`You entered: ${day} \nThe following day is: thu`);
    break;
  case "thu":
    console.log(`You entered: ${day} \nThe following day is: fri`);
    break;
  case "fri":
    console.log(`You entered: ${day} \nThe following day is: sat`);
    break;
  case "sat":
    console.log(`You entered: ${day} \nThe following day is: sun`);
    break;
  default:
    console.log("Invalid input. Please enter a three letter abbreviation in lower case (e.g. sun, mon, tue, wed, thu, fri, sat)");
}