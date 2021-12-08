const states = [
  'California',
  'New York',
  'New Jersey',
  'Alaska',
  'New Mexico',
  'Montana',
];

//Use this handy string method to find the solution: startsWith("New")

//Do some of the states in the array start with "New"?
const someStates = states.some((state) => state.startsWith("New"));
console.log(someStates)

//Does every state in the array start with "New"?
const everyState = states.every((state) => state.startsWith("New"));
console.log(everyState)