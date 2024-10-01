// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(array) {
  const num = array[0];

  for (let i = 1; i < array.length; i++) {
    if (!(array[i] == num + i)) {
      return array[i] - 1;
    }
  }
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
