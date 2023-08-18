// Coding Challenge #2

/*
Use the BMI from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print output to the console, saying who has the higher BMI.  The message is either "Mark's BMI is higher than John's BMI" or "John's BMI is higher than Mark's BMI!"
2. Use a template literal to include the BMI values in the outputs.  Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/

//Data set 1
const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

//Data set 2
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

const markBmi = calculateBMI(markWeight, markHeight);
// Mark's BMI is: 27.31
const johnsBmi = calculateBMI(johnWeight, johnHeight);
// John's BMI is: 24.19

if (markBmi > johnsBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnsBmi})!`);
} else {
  console.log(`John's BMI (${johnsBmi}) is higher than Mark's (${markBmi})`);
}

