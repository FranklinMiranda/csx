// Functions can be defined or Expressed 
// Function definitions are hoisted, Function expressions are not
// ES6 Arrow syntax can be used to shorten function expressions

// Function Definition 
function addTwo (num) {
    return num + 2
}

console.log(addTwo(2))

// Function Expression 
const addThree = function (num) {
    return num + 3
}
console.log(addThree(3))

// Function Expression ES6 Syntax
const addFour = (num) => {
    return num + 4
}
console.log(addFour(4))

// Functions can accept a unlimited number of arguments with the Rest Parameter syntax
function addNumbers (...num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i]
    }
    return total 
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9))