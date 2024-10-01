// Exercise 8: Write a function `groupByAge` that takes an array of people objects (each with a `name` and `age`),
// and groups them by age into an object where the keys are ages and the values are arrays of people of that age.
// Example: groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])
// should return { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }.

function groupByAge(people) {
  const groupByAgePeople = {};
  for (const person of people) {
    if (groupByAgePeople[person.age]) {
      groupByAgePeople[person.age].push(person);
    } else {
      groupByAgePeople[person.age] = [];
      groupByAgePeople[person.age].push(person);
    }
  }

  return groupByAgePeople;
}

console.log(
  groupByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
  ])
); // Expected output: { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }
