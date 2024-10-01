// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

function sortByProperty(people, propertyName) {
  people.sort((a, b) => {
    if (typeof a[propertyName] === "string") {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
    } else {
      return a[propertyName] - b[propertyName];
    }
  });
  return people;
}

//age test
console.log(
  sortByProperty(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
    "age"
  )
); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]

//name test
console.log(
  sortByProperty(
    [
      { name: "Elice", age: 30 },
      { name: "Cob", age: 20 },
      { name: "Bob", age: 22 },
      { name: "Aob", age: 25 },
    ],
    "name"
  )
);
// // Expected output: [
// { name: 'Aob', age: 25 },
// { name: 'Bob', age: 22 },
// { name: 'Cob', age: 20 },
// { name: 'Elice', age: 30 }
//   ]
