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

//==== Prompt can only be seen with dev tools opened move notes to HTML, JS folder

//Lecture:  Equality Operators : == vs ===

/*
1. Declare a variable 'numNeighbors'
 based on a prompt input like this: prompt (`How many neighbor countries does your country have?')
 
 2. If there is only 1 neighbor country, log to the console.(`Only 1 border!`) use loose equality == for now.

 3. Use an else-if block to log `1 More than 1 border` in case 'numNeighbors' is greater than 1`.
 
 4. Use an else block to log `No Borders` (this block will be executed when 'numNeighbors' is 0 or any other value).

 5. Test the code with different values of 'numNeighbor', including 1 and 0.

 6. Change == to ===, and test the code again, with the same values of 'numNeighbors'. Notice what happens when there is exactly 1 border! Why is this happening?

 7. Finally, convert 'numNeighbors' to a number, and watch what happens now when you input 1.

 8. Reflect on why we should use the === operator and type conversion in this situation.
 
 */

const numNeighbors = Number(
  prompt(`How many neighbor countries does your country have?`)
);

if (numNeighbors === 0) {
  console.log(`No borders.`);
} else if (numNeighbors === 1) {
  console.log(`Only 1 border.`);
} else if (numNeighbors >= 2) {
  console.log(`Wow you have many bordering countries!`);
} else {
  console.log(`Please enter a number of bordering countries...`);
}
