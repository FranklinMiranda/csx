// Callbacks and Higher Order Functions are often used with Array Iteration Methods like forEach and Map
// Example forEach Method with a passed in inline Function
// forEach Method does not return any values

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// Entire inline function is inserted into line 7 with array[i] passed in as el
function map(arr, call) {
  let newArr = [];
  forEach(arr, function (el) {
    newArr.push(call(el));
  });

  return newArr;
}

console.log(map([3, 4, 5], (n) => n - 2));

// Constructed Filter Method
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  if (num % 2 === 0) {
    return true;
  }
}

function func2(num) {
  if (num % 2 === 1) {
    return true;
  }
}

console.log(filterArray(arrOfNums, func1));
console.log(filterArray(arrOfNums, func2));

// EitherCallBack calls a filter array with either of two call backs
function eitherCallback(callback1, callback2) {
  return function (el, i, arr) {
    return callback1(el) || callback2(el);
  };
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const arrOfNum = [10, 35, 105, 9];
const intergerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
// On the next line eitherCallback function is evaluated and the returned anonymous function is assigned to intSqRtOrOver100
const intSqRtOrOver100 = eitherCallback(intergerSquareRoot, over100);
// The assigned anonymous function to intSqRtOrOver100 can now access the parameters passed into the callback inside filterArray
console.log(filterArray(arrOfNum, intSqRtOrOver100));

// Reduce Function
function intersection(arr) {
  let newArr = arr.pop();
  let resultArr = [];

  newArr.forEach((el) => {
    const included = arr.reduce((total, item) => {
      if (item.includes(el)) {
        total++;
      }
      return total;
    }, 0);
    if (included === arr.length) {
      resultArr.push(el);
    }
  });

  return resultArr;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
