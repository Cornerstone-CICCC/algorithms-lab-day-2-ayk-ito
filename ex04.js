// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(word) {
  const characters = word.split("");
  let count = {};
  let mostFrequentChar = "";
  let highestCount = 0;

  characters.forEach((char) => {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  });

  console.log(count);

  for (let char in count) {
    if (count[char] > highestCount) {
      highestCount = count[char];
      mostFrequentChar = char;
    }
  }

  return mostFrequentChar;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
console.log(mostFrequentChar("tie")); // Expected output: "t"
