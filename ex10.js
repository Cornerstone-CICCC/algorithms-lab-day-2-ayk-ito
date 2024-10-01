// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(message) {
  const messageArr = message.split(/\s+|_/);
  let result = [];
  result.push(messageArr[0]);
  for (let i = 1; i < messageArr.length; i++) {
    result.push(messageArr[i].charAt(0).toUpperCase() + messageArr[i].slice(1));
  }
  return result.join("");
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
console.log(convertToCamelCase("hello_world hey")); // Expected output: "helloWorldHey"
