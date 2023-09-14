"use strict";
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
* Create an arrow function 'calcAverage' to calculate the average of 3 scores.
* Use the function to calculate the average for both teams.
* Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
* Example: "Koalas win (30 vs. 13)"
* Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.

Data 1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49.
*/

// const calcAverage = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3;
//   return average.toFixed(2);
// };

// const avgDolphins = calcAverage(44, 23, 71);
// console.log(avgDolphins);

// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})!`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})!`);
//   } else {
//     console.log(`No team won based on the new double the average score rule!`);
//   }
// };

// const results = checkWinner(avgDolphins, avgKoalas);

//================= Re-Factor Version ==========

// Function to calculate average
const calculateAverage = scores => {
  const sum = scores.reduce((total, score) => total + score, 0);
  return (sum / scores.length).toFixed(2);
};

// Function to determine the winner
const determineWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})!`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})!`;
  } else {
    return "No team won based on the new double the average score rule!";
  }
};

// Test data
const dolphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

// Calculate averages
const avgDolphins = calculateAverage(dolphinsScores);
const avgKoalas = calculateAverage(koalasScores);

// Determine the winner
const result = determineWinner(avgDolphins, avgKoalas);

// Display the result
console.log(result);
