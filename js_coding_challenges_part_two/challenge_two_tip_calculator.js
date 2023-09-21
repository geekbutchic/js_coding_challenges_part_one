"use strict";

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
* Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
* And now let's use arrays! So create an array 'bills' containing the test data below.
* Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
* Bonus: Create an array 'total' containing the total values, so the bill + tip.
*/

const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const testBill = 100;
const testTip = calcTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${testTip}.`);

const bills = [125, 555, 44];
const tips = bills.map(calcTip);
console.log(`Tips for the bills:`, tips);

const total = bills.map(bill => bill + calcTip(bill));
console.log("Total values for the bills:", total);
