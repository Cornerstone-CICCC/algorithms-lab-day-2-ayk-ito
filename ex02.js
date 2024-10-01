// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

function arrayDifference(arr1, arr2) {
  let result = [];

  arr1.forEach((num) => {
    if (!arr2.includes(num)) {
      result.push(num);
    }
  });

  return result;
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]
