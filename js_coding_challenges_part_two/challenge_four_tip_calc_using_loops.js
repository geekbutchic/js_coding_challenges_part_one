// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totalAmounts = [];

// function tipPercentage(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// function calcTip(billsArr) {
//   for (let i = 0; i < billsArr.length; i++) {
//     const tipPercentageValue = tipPercentage(billsArr[i]);
//     tips.push(tipPercentageValue);

//     const totalAmount = billsArr[i] + tipPercentageValue;
//     totalAmounts.push(totalAmount);
//   }
// }

// // Call the calcTip function to calculate tips for each bill
// calcTip(bills);

// console.log(tips);
// console.log(totalAmounts);

// Refactored Version 
function calculateTipPercentage(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calculateTotalAmount(bill) {
  const tipPercentageValue = calculateTipPercentage(bill);
  return bill + tipPercentageValue;
}

function calculateTipsAndTotalAmounts(billsArr) {
  const tips = [];
  const totalAmounts = [];

  for (let i = 0; i < billsArr.length; i++) {
    const bill = billsArr[i];
    const tipPercentageValue = calculateTipPercentage(bill);
    const totalAmount = calculateTotalAmount(bill);

    tips.push(tipPercentageValue);
    totalAmounts.push(totalAmount);
  }

  return { tips, totalAmounts };
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const { tips, totalAmounts } = calculateTipsAndTotalAmounts(bills);

console.log(tips);
console.log(totalAmounts);
