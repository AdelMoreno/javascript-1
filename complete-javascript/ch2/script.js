/*
* Variables and data types
*/

// console.log("Hello World!")

// let firstName = "John";
// console.log(firstName);

// const lastName = "Smith";
// let age = 28;

// let fullAge = true;
// console.log(fullAge);

// let job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// // Variable naming rules
// let $3years = 3;
// let johnMark = "John and Mark";

/*
* Variable mutation and type coercion
*/

// let firstName = "John";
// let age = 28;

// console.log(firstName + " " + age);

// let job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(firstName + " is a " + age + " years old " + job + ". Is he married? " + isMarried)

// // Variable mutation
// age = " twenty eight";
// job = "driver";

// alert(firstName + " is a " + age + " years old " + job + ". Is he married? " + isMarried)

// let lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);


/**
 * Basic operators
 */
// let now, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;

// //Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//  console.log(yearJohn);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  //logical operators
//  let johnOlder = ageJohn < ageMark;
//  console.log(johnOlder);

//  // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");
// let x;
// // console.log(typeof x);

// /**
//  * operator precedence
//  */

// let now = 2018;
// let yearJohn = 1989;
// let fullAge = 18;

// // multiple operators
// let isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// // grouping
// let ageJohn = now - yearJohn;
// let ageMark = 35;
// let average = (ageJohn + ageMark) / 2;
// console.log(average);

// // multiple assignments
// let x, y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // more operators
// x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x = x + 1;
// x +=1;
// x++;
// x--;
// console.log(x);
// let markHeight = 2;
// let markMass = 62;

// let johnHeight = 1.75;
// let johnMass = 57;

// let markBmi = (markHeight * markHeight) / markMass;
// let johnBmi = (johnHeight * johnHeight) / johnMass;

// let bmiComparison = markBmi > johnBmi;

// console.log("Is Mark's BMI higher than John's? " + bmiComparison);

/**
 * If / else statements
 */

// let firstName = "John";
// let civilStatus = "single";

// if (civilStatus === "married") {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }

// let isMarried = false;

// if (isMarried) {
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }

// let markHeight = 2;
// let markMass = 62;

// let johnHeight = 1.75;
// let johnMass = 57;

// let markBmi = (markHeight * markHeight) / markMass;
// let johnBmi = (johnHeight * johnHeight) / johnMass;

// if (markBmi < johnBmi) {
//     console.log("Mark's BMI is lower than John's");
// } else {
//     console.log("Mark's BMI is larger than John's");
// }

/**
 * boolean logic
 */

//  let firstName = "John";
//  let age = 16;

//  if (age < 13) {
//      console.log(firstName + " is a boy.") 
//   } else if(age >= 13 && age < 20) {
//       console.log(firstName + " is a teenager.")
//   } else if(age >= 20 && age < 30) {
//       console.log(firstName + " is a young man.")
//   } else {
//      console.log(firstName + " is a man.")
//  }

/**
 * ternary operator and switch statement
 */

//  let firstName = "John";
//  let age = 16;

//  //ternary operator
//  age >= 18 ? console.log(firstName + " drinks beer.") :
//  console.log(firstName + " drinks juice.");

//  let drink = age >= 18 ? "beer" : "juice";
//  console.log(drink);

//  if (age >= 18) {
//      let drink = "beer";
//  } else {
//      let drink = "juice";
//  }

// // switch statement
// let job = "teacher";
// switch (job) {
//     case "teacher":
//     case "instructor":
//         console.log(firstName + " teaches kids how to code.");
//         break;
//     case "driver":
//         console.log(firstName + " drives an uber in Lisbon.");
//         break;
//     case "designer":
//         console.log(firstName + " designs beautiful website.");
//         break;
//     default:
//         console.log(firstName + " does something else.");
// }

// switch (true) {
// case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
// case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
// case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
// default:
//     console.log(firstName + " is a man.")
// }

/**
 * truthy and falsy values and equality operators
 */

 // falsy values: undefined, null, 0, "", NaN
 //truthy values: NOT falsy values

//  let height;

//  height = 23;

//  if (height || height === 0) {
//      console.log("Variable is defined");
//  } else {
//      console.log("Variable has NOT been defined");
//  }

//  // equality operators
//  if (height == "23") {
//      console.log("The == operator does type coercion!");
//  }

// coding challenge 2

let johnsGameOne = 10;
let johnsGameTwo = 10;
let johnsGameThree = 10;

let mikesGameOne = 10;
let mikesGameTwo = 10;
let mikesGameThree = 10;

let marysGameOne = 10;
let marysGameTwo = 10;
let marysGameThree = 10;

let johnsAverage = (johnsGameOne + johnsGameTwo + johnsGameThree) / 3;
let mikesAverage = (mikesGameOne + mikesGameTwo + mikesGameThree) / 3;
let marysAverage = (marysGameOne + marysGameTwo + marysGameThree) / 3;

if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
    console.log("John is the winner with " + Math.round(johnsAverage) + " points!");
} else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
    console.log("Mike is the winner with " + Math.round(mikesAverage) + " points!");
} else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
    console.log("Mary is the winner with " + Math.round(marysAverage) + " points!")
} else if (mikesAverage === johnsAverage && mikesAverage === marysAverage) {
    console.log("It was a tie with everyone having " + Math.round(mikesAverage) + " points!")
}