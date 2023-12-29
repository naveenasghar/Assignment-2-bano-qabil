// let Assign2=("welcome to Assignmnt2");
alert("welcome to Assignment 2");
// Answer 1
var name=prompt("Enter a score");
let score = 85;
let result = (score >= 80) ? "pass" : "fail";
console.log(result);


// answer 2

let user = {
    getInfo: function() {
      return {
        name: "Naveen",
        age: 17
      };
      return user;
    }
  };
  let UserName = user?.getInfo()?.name;
  console.log(UserName);
//   Answer 3
const array = [1, 2, 3, 4];

for (let value in array) {
    console.log(value);
}
// Answer 4

function calculateAverage(numbers) {

    if (numbers.length === 0) {
      return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
  }
  console.log(calculateAverage);
// Answer 5
function createClickHandler(buttonNumber) {

    let count = 0;


    function handleClick() {
      count++;
      console.log(`Button ${buttonNumber} clicked ${count} times.`);
    }

    return handleClick;
  }
  const clickHandler1 = createClickHandler(1);
  const clickHandler2 = createClickHandler(2);

  document.getElementById('button1').addEventListener('click', clickHandler1);
  document.getElementById('button2').addEventListener('click', clickHandler2);
// Answer 6
const student = {
  name: "Mark zuckberg",
  age: 20,
  grades: [85, 90, 78, 92, 88],


  calculateAverage: function() {

    if (this.grades.length === 0) {
      return 0; 
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / this.grades.length;

    return average;
  }
};
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Grades: ${student.grades.join(', ')}`);
console.log(`Average Grade: ${student.calculateAverage()}`);
// Answer 7
const originalObject = { a: 1, b: { c: 2 } };
const referenceCopy = originalObject;
referenceCopy.b.c = 99; 
console.log(originalObject); 
console.log(referenceCopy);
// Answer 8
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbersArray.length; i++) {
  const number = numbersArray[i];
  const result = (number % 2 === 0) ? "even" : "odd";
  console.log(`${number} is ${result}.`);
}
// Answer 9
// these three loops depends on the specific requirements and structure of your code.
//  Use a for loop for a known number of iterations, a while loop for a condition - based iteration, and a
//   do...while loop when you want to ensure at least one execution before checking the condition.
// Answer 10
const students = [
  { name: "mania", grades: { math: 90, science: 85 } },
  { name: "Bob", grades: { math: 95 } },
  { name: "carolia" }
];
for (const student of students) {
  const mathGrade = student?.grades?.math;
  if (mathGrade !== undefined) {
    console.log(`${student.name}'s math grade: ${mathGrade}`);
  } else {
    console.log(`${student.name} does not have a math grade.`);
  }
}
// Answer 11
const car = {
  make: "fortuner",
  model: "Camry",
  year: 2022,
  color: "Blue"
};
for (const key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}
// Answer 12
// break statement
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; 
  }
}
// continue statement
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i);
}
// Answer 13
function calculateTax(income) {
  const taxRate = income > 50000 ? 0.2 : income > 20000 ? 0.15 : 0.1;
  const taxAmount = income * taxRate;

  return taxAmount;
}
const income1 = 25000;
const income2 = 35000;
const income3 = 60000;
console.log(`Tax for income $${income1}: $${calculateTax(income1)}`);
console.log(`Tax for income $${income2}: $${calculateTax(income2)}`);
console.log(`Tax for income $${income3}: $${calculateTax(income3)}`);
// Answer 14
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    startEngine() {
      console.log(`The ${this.make} ${this.model}'s engine is now running.`);
    }
  }
  const myCar = new Car("Toyota", "Camry");
  myCar.startEngine();
///////////////////////////////////////////////
