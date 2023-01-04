// Variables can be declared with var, let, or const
// Functions can be defined or expressed
var number = 5;
console.log(number);

console.log(multiply(number, number));

function multiply(x, y) {
  return x * y;
}

console.log(multiply(number, number));

const num = 10;
console.log(multiply(num, number));

let num1 = 25;
console.log(multiply(num, num1));

const name = 'Franklin';
const lname = 'Miranda';

function fullname(fname, lname) {
  return `${fname} ${lname}`;
}

console.log(fullname(name, lname));

const testStatus = false;

function tester(status, num) {
  if (status === true) {
    return num;
  } else {
    return num * num;
  }
}

console.log(tester(testStatus, num1))
