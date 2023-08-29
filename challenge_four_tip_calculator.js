// Coding Challenge 4

/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.  In his country, it's usual to tip 15% if the bill value is between 50 and 300.  If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement.  Use a ternary operator.
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).  Example `The bill was 275, the tip was 41.25, and the total value is 316.25`.

Test Data : Test for bill value 275, 40, 430.
*/

// Test data
const bill = 430;
const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.20;

// Calculate the tip
const tip = bill * tipPercentage;

// Calculate the total value
const totalValue = bill + tip;

// Print the message
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`);

