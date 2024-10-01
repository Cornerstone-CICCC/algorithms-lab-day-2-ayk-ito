// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

function validateEmail(email) {
  const emailCharacters = email.split("");
  const vasicValidation = ["@", "."];
  if (
    emailCharacters.includes(vasicValidation[0]) &&
    emailCharacters.includes(vasicValidation[1])
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false
