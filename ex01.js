// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".
function capitalizeWords(message) {
  const messageArr = message.split(" ");
  let result = [];
  for (let i = 0; i < messageArr.length; i++) {
    result.push(messageArr[i].charAt(0).toUpperCase() + messageArr[i].slice(1));
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
