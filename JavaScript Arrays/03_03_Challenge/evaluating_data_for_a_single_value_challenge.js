//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
const includesThreeHundred = bowlingScores.includes(300)
console.log(includesThreeHundred)

//Challenge Question #2
//Are some of the scores under 150?
const underOneFifty = bowlingScores.some((element) => {
    return element < 150;
})
console.log(underOneFifty)

//Challenge Question #3
//Is every score an even number?
const evenNumbers = bowlingScores.every((element) => {
    return element % 2 === 0;
})
console.log(evenNumbers)