//# Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
*/

/*
Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
* Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// bmi = markWeight / (markHeight * markHeight);
// console.log(`${bmi.toFixed(2)}`);

/* 
Notes: bmi is equal to variable markWeight divided by (markHeight * markHeight).
Order of Precedence
(1.69 * 1.69) // Parenthesis First 2.8561
78 / 2.8561 // Right to Left 27.31
*/

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

const markBmi  = calculateBMI(markWeight, markHeight);
console.log(`Mark's BMI is: ${markBmi}`); // Mark's BMI is: 27.31

const johnsBmi  = calculateBMI(johnWeight, johnHeight);
console.log(`John's BMI is: ${johnsBmi}`); // John's BMI is: 24.19

const markBmi2  = calculateBMI(markWeight2, markHeight2);
console.log(`Mark's BMI is: ${markBmi2}`); // Mark's BMI is: 26.88

const johnsBmi2  = calculateBMI(johnWeight2, johnHeight2); 
console.log(`John's BMI is: ${johnsBmi2}`); // John's BMI is: 27.44

const markHigherBMI = markBmi > johnsBmi;
console.log(markHigherBMI); // true

const markHigherBMI2 = markBmi2 > johnsBmi2;
console.log(markHigherBMI2); // false