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
// console.log(typeof x);

/**
 * operator precedence
 */

let now = 2018;
let yearJohn = 1989;
let fullAge = 18;

// multiple operators
let isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// grouping
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// more operators
x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x +=1;
x++;
x--;
console.log(x);