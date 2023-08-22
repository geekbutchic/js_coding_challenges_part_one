// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

/*
1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score).

3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks.

4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
*/

//========== Solutions Below =======
// function calculateAverage(scores) {
//   if (scores.length === 0) {
//     return 0; // Return 0 for an empty array to avoid division by zero
//   }

//   const total = scores.reduce((sum, score) => sum + score, 0);
//   const average = total / scores.length;

//   return average.toFixed(2);
// }

// const dolphinScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];
// const averageScoreDolphin = calculateAverage(dolphinScores);
// const averageScoreKoalas = calculateAverage(koalasScores);
// console.log(`The average score of the Dolphins is: ${averageScoreDolphin}`);
// console.log(`The average score of the Koalas is: ${averageScoreKoalas}`);

// if (averageScoreDolphin > averageScoreKoalas) {
//   console.log(
//     `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} won the competition 🐬`
//   );
// } else if (averageScoreDolphin === averageScoreKoalas) {
//   console.log(
//     `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} resulted in a tie!`
//   );
// } else if (averageScoreKoalas > averageScoreDolphin) {
//   console.log(
//     `The Koalas average score of ${averageScoreKoalas} vs Dolphins ${averageScoreDolphin} won the competition 🐨`
//   );
// } //The Dolphins average score of 97.67 vs Koalas 96.33 won the competition 🐬

// Bonus 1 Solution
// function calculateAverage(scores) {
//   if (scores.length === 0) {
//     return 0; // Return 0 for an empty array to avoid division by zero
//   }

//   const total = scores.reduce((sum, score) => sum + score, 0);
//   const average = total / scores.length;

//   return average.toFixed(2);
// }

// const dolphinScores = [97, 112, 101];
// const koalasScores = [109, 95, 123];
// const averageScoreDolphin = calculateAverage(dolphinScores);
// const averageScoreKoalas = calculateAverage(koalasScores);
// console.log(`The average score of the Dolphins is: ${averageScoreDolphin}`);
// console.log(`The average score of the Koalas is: ${averageScoreKoalas}`);

// if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100) {
//   console.log(
//     `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} won the competition 🐬`
//   );
// } else if (averageScoreDolphin === averageScoreKoalas) {
//   console.log(
//     `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} resulted in a tie!`
//   );
// } else if (
//   averageScoreKoalas > averageScoreDolphin &&
//   averageScoreKoalas >= 100
// ) {
//   console.log(
//     `The Koalas average score of ${averageScoreKoalas} vs Dolphins ${averageScoreDolphin} won the competition 🐨`
//   );
// } //The Koalas average score of 109.00 vs Dolphins 103.33 won the competition 🐨

// Bonus 2  Solution
function calculateAverage(scores) {
  if (scores.length === 0) {
    return 0; // Return 0 for an empty array to avoid division by zero
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;

  return average.toFixed(2);
}

const dolphinScores = [97, 112, 101];
const koalasScores = [109, 95, 106];
const averageScoreDolphin = calculateAverage(dolphinScores);
const averageScoreKoalas = calculateAverage(koalasScores);
console.log(`The average score of the Dolphins is: ${averageScoreDolphin}`);
console.log(`The average score of the Koalas is: ${averageScoreKoalas}`);

if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100) {
  console.log(
    `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} won the competition 🐬`
  );
} else if (averageScoreDolphin === averageScoreKoalas) {
  console.log(
    `The Dolphins average score of ${averageScoreDolphin} vs Koalas ${averageScoreKoalas} resulted in a tie!`
  );
} else if (
  averageScoreKoalas > averageScoreDolphin &&
  averageScoreKoalas >= 100
) {
  console.log(
    `The Koalas average score of ${averageScoreKoalas} vs Dolphins ${averageScoreDolphin} won the competition 🐨`
  );
} //The Dolphins average score of 103.33 vs Koalas 103.33 resulted in a tie!

//Mistake of omitting any score >=100 vs average score && greater than >= 100 -> (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100)