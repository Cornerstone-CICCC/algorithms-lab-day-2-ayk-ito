// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(message) {
  const vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  const messageStr = message.replaceAll(" ", "");
  const characters = messageStr.split("");
  let count = 0;

  characters.forEach((char) => {
    if (!vowels.includes(char)) {
      count++;
    }
  });

  return count;
}

console.log(countConsonants("hello world")); // Expected output: 7
