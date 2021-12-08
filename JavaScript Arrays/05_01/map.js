const friends = [
  { firstname: 'Jane', lastname: 'Doe' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Alex', lastname: 'Trebek' },
];

//Create a new array that includes only the full name (firstname + lastname) of each friend.
const fullName = friends.map((element) => {
  return ` ${element.firstname} ${element.lastname}`
})
// This is the old concatenation way of doing the same as above
// const fullName = friends.map((name) => {
//   return name.firstname + " " + name.lastname;
// });

console.log(fullName)

