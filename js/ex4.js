/* HW 3
   Example 4 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 4");

function calculate(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input, both inputs must be numbers";
    }
  
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let modulo = num1 % num2;
  
    return `Addition: ${num1} + ${num2} = ${addition} \n
  Subtraction: ${num1} - ${num2} = ${subtraction} \n
  Multiplication: ${num1} * ${num2} = ${multiplication} \n
  Division: ${num1} / ${num2} = ${division} \n
  Modulo: ${num1} % ${num2} = ${modulo}`; 
  }
  
  calculate(3, 4);