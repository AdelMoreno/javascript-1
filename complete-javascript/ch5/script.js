// function constructor

// let john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
};

Person.prototype.lastName = "Smith"

let john = new Person("John", 1990, "Teacher");

let jane = new Person("Jane", 1969, "designer");

let mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);