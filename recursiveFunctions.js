// Recursive Functions 
// Date : 1/9/2023
// Author : Franklin Miranda
// Description : Recursive Functions call themselves inside the function body
// If the exit condition of a recursive function returns the result then the outer function needs to return the recursive function, else it needs to return the stored result variable
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
    // Returning the recurse function because the result is returned from the exit condition 
    return recurse ()
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(getLength([1])); // -> 1
  console.log(getLength([1, 2])); // -> 2
  console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  console.log(getLength([])); // -> 0
  
  // Recursive Function POW
  function pow(base, exponent) {
    // Recursive Function with result default parameter set to result
	function recurse (result = base) {
        // Returning result from the exit condition
    if (exponent === 1) {return result}
    exponent--
    return recurse (result *= base)
  }
  // Returning recursive function from outer function because the exit condition returns result 
  return recurse ()
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

// Recursive FLOW function
function flow(input, funcArray) {
	function recurse (counter = 0) {
    if (counter === funcArray.length) {return input}
    input = funcArray[counter](input)
    return recurse (counter += 1)
  }
  return recurse()
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7


// Recursive Function Card Shuffle 
function shuffleCards(topHalf, bottomHalf) {
    // YOUR CODE HERE
    const result = [];
    function recurse (counter = 0) {
      if (!topHalf[counter]) {
        result.push(...bottomHalf.slice(counter))
          return
      }
      if (!bottomHalf[counter]) {
        result.push(...topHalf.slice(counter))
      return 
      }
      result.push(topHalf[counter], bottomHalf[counter])
      return recurse (counter += 1)
    }
    recurse()
    return result
  }
  // UNCOMMENT TO TEST YOUR WORK
  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  console.log(shuffleCards(topHalf, bottomHalf));
    /*-> ['Queen of Diamonds',
          'Jack of Hearts',
          'Five of Hearts',
          'Ten of Spades',
          'Ace of Spades',
          'Eight of Clubs',
        ]
    */