// Recursive Functions 
// Date : 1/9/2023
// Author : Franklin Miranda
// Description : Recursive Functions call themselves inside the function body
function factorial(num) {
    // Using Closure to Store result Variable
	let result = num;
    // Writing a recursive function that will loop through a num decrementing to 0
  function recurse (num) {
    // Recursive Function exit case
    if (num === 0) {return}
    result *= num
    return recurse (num -= 1)
  }
  recurse (num -=1)
  return result 
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720

// GetLength Recursive Function 
function getLength(array) {
    function recurse (counter = 0) {
      if (!array[counter]) {return counter}
      return recurse (counter += 1)
    }
    return recurse ()
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(getLength([1])); // -> 1
  console.log(getLength([1, 2])); // -> 2
  console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  console.log(getLength([])); // -> 0
  