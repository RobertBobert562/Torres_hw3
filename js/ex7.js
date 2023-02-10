/* HW 3
   Example 7 JavaScript code
*/

console.log("Robert's Output from HW 3 Example 7");

function validateTime(hours, minutes, seconds) {
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      return "Invalid input, all inputs must be numbers";
    }
    if (hours < 0 || hours > 23) {
      return "Invalid input, hours must be between 0 and 23";
    }
    if (minutes < 0 || minutes > 59) {
      return "Invalid input, minutes must be between 0 and 59";
    }
    if (seconds < 0 || seconds > 59) {
      return "Invalid input, seconds must be between 0 and 59";
    }
    return true;
  }
  
  function oneSecondLater(hours, minutes, seconds) {
    let result = validateTime(hours, minutes, seconds);
    if (result !== true) {
      return result;
    }
  
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
        if (hours === 24) {
          hours = 0;
        }
      }
    }
  
    return `One second later: ${hours}h${minutes}m${seconds}s`;
  }
  
  oneSecondLater(14, 17, 59);
  oneSecondLater(6, 59, 59);
  oneSecondLater(23, 59, 59);
  