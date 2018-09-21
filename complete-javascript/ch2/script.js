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

// let johnsGameOne = 10;
// let johnsGameTwo = 10;
// let johnsGameThree = 10;

// let mikesGameOne = 10;
// let mikesGameTwo = 10;
// let mikesGameThree = 10;

// let marysGameOne = 10;
// let marysGameTwo = 10;
// let marysGameThree = 10;

// let johnsAverage = (johnsGameOne + johnsGameTwo + johnsGameThree) / 3;
// let mikesAverage = (mikesGameOne + mikesGameTwo + mikesGameThree) / 3;
// let marysAverage = (marysGameOne + marysGameTwo + marysGameThree) / 3;

// if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
//     console.log("John is the winner with " + Math.round(johnsAverage) + " points!");
// } else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
//     console.log("Mike is the winner with " + Math.round(mikesAverage) + " points!");
// } else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
//     console.log("Mary is the winner with " + Math.round(marysAverage) + " points!")
// } else if (mikesAverage === johnsAverage && mikesAverage === marysAverage) {
//     console.log("It was a tie with everyone having " + Math.round(mikesAverage) + " points!")
// }

/**
 * functions
 */

//  function calculateAge(birthYear) {
//      return 2018 - birthYear;
//  }

//  let ageJohn = calculateAge(1990);
//  let ageMike = calculateAge(1948);
//  let ageJane = calculateAge(1969);
 
//  console.log(ageJohn, ageMike, ageJane)

//  function yearsUntilRetirement(year, firstName) {
//      let age = calculateAge(year);
//      let retirement = 65 - age;

//      if (retirement > 0) {
//      console.log(firstName + " retires in " + retirement + " years.")
//  } else {
//     console.log(firstName + " is already retired.")
//  }
// }

//  yearsUntilRetirement(1990, "John");
//  yearsUntilRetirement(1948, "Mike");
//  yearsUntilRetirement(1969, "Jane");

/**
 * function statements and expressions
 */

 // function declaration 
 // function whatDoYouDo(job, firstName) {}

 //function expression
// let whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case "teacher":
//             return firstName + " teaches kids how to code";
//         case "driver":
//             return firstName + " drives a cab in Lisbon.";
//         case "designer":
//             return firstName + " designs beautiful websites";
//         default:
//             return firstName + " does something else";
//     }
// }

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("retired", "Mike"));

/**
 * arrays
 */

//  let names = ["John", "Mark", "Jane"];
//  let years = new Array(1990, 1969, 1948);

//  console.log(names[1]);
//  console.log(names.length);

//  names[1] = "Ben";
//  names[names.length] = "Mary";
//  console.log(names);

//  // different data types
//  let john = ["John", "Smith", 1990, "teacher", false];

//  john.push("blue");
//  john.unshift("Mr.");
//  console.log(john);

//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(1990));

// let isDesigner = john.indexOf("designer") === -1 ? "john is Not a designer" : "John Is a designer";
// console.log(isDesigner);

//coding challenge 3

// let tipArray = [];
// let totalArray = [];

// function calculateTotal(bill) {
//     if (bill < 50) {
//         let tip = Math.round((bill * .2)*100)/100;
//         tipArray.push(tip);
//         let total = bill + tip;
//         totalArray.push(total)
//     } else if (bill >= 50 && bill <= 200) {
//         let tip = Math.round((bill * .15)*100)/100;
//         tipArray.push(tip);
//         let total = bill + tip;
//         totalArray.push(total)
//     } else if (bill > 200) {
//         let tip = Math.round((bill * .1)*100)/100;
//         tipArray.push(tip);
//         let total = (bill + tip)
//         totalArray.push(total)
//     }
// }

// calculateTotal(124);
// calculateTotal(48);
// calculateTotal(268);

// console.log(tipArray, totalArray);

/**
 * objects and properties
 */

//  let john = {
//      firstName: "John",
//      lastName: "Smith",
//      birthYear: 1990,
//      family: ["Jane", "Mark", "Bob", "Emily"],
//      job: "teacher",
//      isMarried: false
//  };

//  console.log(john.firstName);
//  console.log(john["lastName"]);
//  let x = "birthYear";
//  console.log(john[x]);

//  john.job = "designer";
//  john["isMarried"] = true;
//  console.log(john);

//  let jane = new Object();
//  jane.firstName = "Jane";
//  jane.birthYear = 1969;
//  jane["lastName"] = "Smith"
//  console.log(jane);

/**
 * objects and methods
 */

//   let john = {
//          firstName: "John",
//          lastName: "Smith",
//          birthYear: 1992,
//          family: ["Jane", "Mark", "Bob", "Emily"],
//          job: "teacher",
//          isMarried: false,
//          calcAge: function() {
//              this.age = 2018 - this.birthYear;
//          }
//      };

//      john.calcAge();
//      console.log(john);

// let mark = {
//     firstName: "mark",
//     lastName: "markie",
//     height: 100,
//     weight: 100,
//     calcBMI: function() {
//         this.markBMI = (this.height * 2) / this.weight
//     }
// }

// let john = {
//     firstName: "john",
//     lastName: "johnnie",
//     height: 110,
//     weight: 100,
//     calcBMI: function() {
//         this.johnBMI = (this.height * 2) / this.weight
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// function compare(markBMI, johnBMI) {
//     if (markBMI > johnBMI) {
//         console.log(mark.firstName + " " + mark.lastName + "'s BMI of " + mark.markBMI + " is higher")
//     } else if (markBMI < johnBMI) {
//         console.log(john.firstName + " " + john.lastName + "'s BMI of " + john.johnBMI + " is higher")
//     } else if (markBMI === johnBMI) {
//         console.log("Both " + mark.firstName + " " + mark.lastName + "'s and " + john.firstName + " " + john.lastName + "'s have the same BMI of " + mark.markBMI)
//     }
// }

// console.log(mark, john);
// compare(mark.markBMI, john.johnBMI);

/**
 * loops and iteration
 */

//  for (let i = 0; i < 10; i+= 2) {
//      console.log(i);
//  }

//  let john = ["John", "Smith", 1990, "teacher", false];


//  for (let i = 0; i < john.length; i++) {
//      console.log(john[i]);
//  }

//  let i = 0;
//  while (i < john.length) {
//     console.log(john[i]);
//     i++;
//  }

 // continue and break statements

//  let john = ["John", "Smith", 1990, "teacher", false, "blue"];


//  for (let i = 0; i < john.length; i++) {
//      if (typeof john[i] !== "string") continue;
//      console.log(john[i]);
//  }

//  for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== "string") break;
//     console.log(john[i]);
// }

// looping backwards
// for (let i = john.length - 1; i >= 0; i--) {
//     if (typeof john[i] !== "string") continue;
//     console.log(john[i]);
// }

let tips = [];
let totals = [];

let bill = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function() { for (let i = 0; i < this.bills.length; i++) {
        if (this.bills[i] < 50) {
            let tip = this.bills[i] * .2;
            tips.push(tip);
            let total = this.bills[i] + tip;
            totals.push(total);
        } else if (this.bills[i] >= 50 && this.bills < 200) {
            let tip = this.bills[i] * .15;
            tips.push(tip);
            let total = this.bills[i] + tip;
            totals.push(total);
        } else {
            let tip = this.bills[i] * .10;
            tips.push(tip);
            let total = this.bills[i];
            totals.push(total);
        }
    }
}
}

bill.calcTip();
console.log(tips, totals);