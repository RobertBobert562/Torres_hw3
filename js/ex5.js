/* HW 3
   Example 5 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 5");

function validatePassword() {
   let password = "secret";
   let attempts = 0;
 
   while (attempts < 3) {
     let input = prompt("Enter password:");
     if (input === password) {
       alert(`You entered the correct password after ${attempts + 1} attempt(s)`);
       return;
     } else {
       attempts++;
     }
   }
 
   alert(`Your account is locked! You failed to enter the correct password ${attempts} times`);
 }
 
 validatePassword();
 