// Regular Expressions are patterns used to match character combinations in strings

// Function disemvowel is a function that removes vowels from a input string 
function disemvowel(string) {
    // ADD CODE HERE
    string = string.replace(/a/ig, "");
    string = string.replace(/e/ig, "");
    string = string.replace(/i/ig, "");
    string = string.replace(/o/ig, "");
    string = string.replace(/u/ig, "");
    string = string.replace(/y/ig, "");
    return string
  }
  
  // Uncomment these to check your work!
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'