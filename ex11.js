// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

function countWordOccurrences(message, word) {
  const messageArr = message.split(/\s/);
  let count = {};
  for (let i = 0; i < messageArr.length; i++) {
    if (count[messageArr[i]]) {
      count[messageArr[i]]++;
    } else {
      count[messageArr[i]] = [];
      count[messageArr[i]] = 1;
    }
  }

  return count[word];
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
console.log(countWordOccurrences("hello world hello hello hello hello", "world")); // Expected output: 1
