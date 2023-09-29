// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMI's! This time, let's use objects to implement the calculations!  Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks :
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)".

Test Data: Marks weights 78 kg and is 1.69m tall. John weights 92 kg and is 1.95m.
*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function() {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
    return this.bmi;
  }
};

/*
In this version, the calcBmi function calculates the BMI and stores it as a property (bmi) inside the object itself. This means you can access the BMI directly as john.bmi without needing to recalculate it every time.
*/

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function() {
    const bmi = this.mass / (this.height * this.height);
    return bmi.toFixed(2);
  }
};


mark.calcBmi();
console.log(`Mark: `, mark.bmi);

const johnBMI = john.calcBmi();
console.log(`John: `, johnBMI);

if (johnBMI > mark.bmi) {
  console.log(
    `${john.firstName}'s BMI (${johnBMI}) is higher than ${mark.firstName}'s (${mark.bmi})!`
  );
} else if (mark.bmi > johnBMI) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${johnBMI})!`
  );
} else {
  console.log(
    `${john.firstName} and ${mark.firstName} have the same BMI (${johnBMI})!`
  );
}

// Refactored Version

// Define the calcBmi function outside of the objects
// function calcBmi() {
//   const bmi = this.mass / (this.height * this.height);
//   return bmi.toFixed(2);
// }

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: calcBmi // Assign the calcBmi function to the calcBmi property
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: calcBmi // Assign the calcBmi function to the calcBmi property
// };
