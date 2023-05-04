// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('namesArrayCaps', () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(namesArrayCaps(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

  });
});


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called namesArrayCaps that takes in an array. Then use the .map() method to iterate through the objects and returning the value of each object. Using the split() method it turns into an array of strings. By using the .map() method and toUpperCase() method to capitalize each word and then join() them back into one string. Using string interpolation this will return the sentence and the name capitalized.

const namesArrayCaps = (array) => {
  return array.map((element) => element.name.split(" ").map((value) => value = (value[0].toUpperCase()) + value.slice(1)).join(" ") + ` is ${element.occupation}.`)
}


//   $ /Users/learnacademy/Desktop/week-6-assessment-jameshlee1/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   namesArrayCaps
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('numbersDivided', () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(numbersDivided(hodgePodgeOne)).toEqual([ 2, 0, -1, 0 ])
    expect(numbersDivided(hodgePodgeTwo)).toEqual([ 2, 1, -1 ])

  });
});

const hodgePodgeOne = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgePodgeTwo = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called numbersDivided that takes in an array. Create a new variable called numbers then use the filter() method to filter the integers. Then create another variable dividedThree and use the map() built-in method to iterate through the numbers in the array and divide the number by 3. 

const numbersDivided = (array) => {
  const numbers = array.filter(element=>typeof element==='number')
  const dividedThree = numbers.map(number=>number %3)
  return dividedThree
}

// PASS  ./code-challenges.test.js
//   numbersDivided
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('numbersArray', () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(numbersArray(cubeAndSumOne)).toEqual(99)
    expect(numbersArray(cubeAndSumTwo)).toEqual(1125)

  });
});

const cubeAndSumOne = [2, 3, 4]
// Expected output: 99
const cubeAndSumTwo = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Pseudo: Create a function called numbersArray that takes in an array of numbers as a parameter. Create a new variable  newNumbers then use the .map() method to take the index and cube each value. Return the variable newNumbers adding a + b

const numbersArray = (array) => {
  const newNumbers = array.map((index) => index**3)
  return newNumbers.reduce((a, b) => a + b)
}

// PASS  ./code-challenges.test.js
//   numbersArray
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
