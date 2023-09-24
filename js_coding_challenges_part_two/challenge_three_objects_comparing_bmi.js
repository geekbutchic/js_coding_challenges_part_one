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
    const bmi = this.mass / (this.height * this.height);
    return bmi.toFixed(2);
  }
};

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

console.log(john.calcBmi());
console.log(mark.calcBmi());

const johnBMI = john.calcBmi();
const markBMI = mark.calcBmi();

if (johnBMI > markBMI) {
  console.log(
    `${john.firstName}'s BMI (${johnBMI}) is higher than ${mark.firstName}'s (${markBMI})!`
  );
} else if (markBMI > johnBMI) {
  console.log(
    `${mark.firstName}'s BMI (${markBMI}) is higher than ${john.firstName}'s (${johnBMI})!`
  );
} else {
  console.log(
    `${john.firstName} and ${mark.firstName} have the same BMI (${johnBMI})!`
  );
}
