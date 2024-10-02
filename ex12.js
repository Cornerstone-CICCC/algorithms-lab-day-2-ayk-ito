// Exercise 12: Write a function `calculateBMI` that takes two arguments: weight (in kg) and height (in meters).
// The function should return the BMI (Body Mass Index), rounded to two decimal places.
// The formula for BMI is: BMI = weight (kg) / height (m)^2. To get the squared value of height, just multiply height by itself.
// Example: calculateBMI(70, 1.75) should return 22.86.

function calculateBMI(weight, height) {
  let BMI = (weight / height ** 2).toFixed(2);
  return BMI;
}

console.log(calculateBMI(70, 1.75)); // Expected output: 22.86
