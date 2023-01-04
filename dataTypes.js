// Data types can be primitive or composite
// Primitive Data Types include strings, numbers, booleans, null, and undefined

const string = 'string'
const number = 0
const boolean = true
const nullVariable = null
let undefined; 

// Composite Data Types include objects and arrays
const object = {objectName : 'Franklin'}
const array = [1,2,3,4,5]

// String Concatenation
console.log(string + object.objectName)

// Template Literal 
const sentence = `This is a example of a temple literal using ${string}`

// String Properties and Methods
const stringLength = string.length
const stringUpper = string.toUpperCase()
const stringLower = string.toLowerCase()

// Bracket Notation for Strings
const letter1 = string[0]
const letterLast = string[string.length - 1]

// Typeof Operator returns the data type of the variable 
console.log(typeof(string))

