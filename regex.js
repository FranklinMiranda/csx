// Regular Expressions are patterns used to match character combinations in strings

// Function disemvowel is a function that removes vowels from a input string 
// Regular Expression String Methods like search() and replace() use a pattern to search for or replace parts of strings
// Regular Expression patterns can be followed by a flag or flags to modify the expression. i is for case insensitive, g is for a global match, which means all occurrences 
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