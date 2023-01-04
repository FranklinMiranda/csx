// Loops include for, for in, for off, and while Loops

// A For Loop uses 3 expressions to loop through a block of code
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// A For In Loop loops through the properties of an object
const obj = { 1: 'apple', 2: 'banana', 3: 'cherry', 4: 'grape', 5: 'pineapple' };

for (let fruit in obj) {
  console.log(fruit);
  console.log(obj[fruit]);
}

// A For of Loop loops through thevalues of an iterable object
const arr = ['bmw', 'mercedes', 'volvo', 'chrysler', 'audi'];

for (let car of arr) {
  console.log(car);
}

// A While Loop loops through a block of code while the specified condition is true
let i = 0; 
while (i < 10) {
  console.log(i);
  i++;
}

// A Do While Loop executes code block once then continues looping while condition is true
let x = 0;

do {
    console.log(x)
    x++;
} 
while (x < 5);