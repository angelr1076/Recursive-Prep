// www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(num) {
  if (num <= 1) return 1;

  return num + sumRange(num - 1);
}

// sumRange(3);

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

// power(2, 4); // 16
// power(2, 3); // 8
// power(2, 2); // 4
// power(2, 1); // 2
// power(2, 0); // 1

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// factorial(5); // 120

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

function all(arr, callback) {
  if (arr.length === 0) {
    return true;
  } else {
    return callback(arr[0]) && all(arr.slice(1), callback);
  }
}

function isPositive(num) {
  return num > 0;
}

// const numbers = [1, 2, 3, 4, 5];
// const allPositive = all(numbers, isPositive); // true

// const mixedNumbers = [1, -2, 3, -4, 5];
// const allPositive2 = all(mixedNumbers, isPositive); // false

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr.shift() * productOfArray(arr);
}

// const six = productOfArray([1, 2, 3]); // 6
// console.log(six);
// var sixty = productOfArray([1, 2, 3, 10]); // 60
// console.log(sixty);

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      console.log(obj[key]);
      return true;
    }
  }

  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

// const hasIt = contains(nestedObject, 44); // true
// const doesntHaveIt = contains(nestedObject, 'foo'); // false
// console.log(hasIt, doesntHaveIt);

// Linked list recursion

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: [],
    },
    {
      name: 'Sophia',
      children: [
        { name: 'Kyle', children: [] },
        { name: 'Zoe', children: [] },
      ],
    },
  ],
};

function findChildren(t) {
  if (t.children.length === 0) {
    return;
  }

  t.children.forEach(child => {
    console.log(child.name);
    return findChildren(child);
  });
}

// let linkedListFind = findChildren(tree);
// console.log(traverseTree);

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:

// let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
  // set base
  if (arr.length === 0) return 0;
  // set a counter
  let counter = 0;

  let first = arr.shift();

  if (Array.isArray(first)) {
    counter += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    counter += 1;
  }

  return counter + totalIntegers(arr);
}

// let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists
function sumSquares(arr) {
  if (arr.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += sumSquares(arr[i]);
    } else {
      total += arr[i] * arr[i];
    }
  }

  return total;
}

// let l = [1, 2, 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]];
// console.log(sumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// Sample:
function replicate(times, number) {
  // base case
  if (times <= 0) return [];

  return [number].concat(replicate(times - 1, number));
}

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

let countDown = function f(fromNumber) {
  let numArr = [];
  let nextNumber = fromNumber - 1;

  if (nextNumber <= 0) {
    numArr.push(0);
  } else {
    numArr.concat(f(nextNumber));
  }

  return numArr;
};

let newYearCountDown = countDown(8);
// console.log(newYearCountDown);

// Using iteration, write a function fibs which takes a number and returns an array containing that
// many numbers from the fibonacci sequence. Using an example input of 8, this method should return
// the array [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(n) {
  let fibArray = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1) {
      fibArray.push(1);
    } else {
      let lastFib = fibArray[fibArray.length - 1];
      let secondLastFib = fibArray[fibArray.length - 2];
      fibArray.push(lastFib + secondLastFib);
    }
  }

  return fibArray;
}

let callFibs = fibs(8);
// console.log(callFibs);

function fibRecursive(n) {
  debugger;
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let prev = fibRecursive(n - 1);
    let current = prev[prev.length - 1] + prev[prev.length - 2];
    return prev.concat(current);
  }
}

let callfibRecursive = fibRecursive(8);
console.log(callfibRecursive);
// prev = fibRecursive(-2 - 1) = [] rev = fibRecursive(-1 - 1) = [] rev = fibRecursive(0 - 1) = []
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [] base 0
// prev = fibRecursive(1 - 1) = 0
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [1] base 1
// prev = fibRecursive(2 - 1) = 1
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1] base 2
// prev = fibRecursive(3 - 1) = 2
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1]
// prev = fibRecursive(4 - 1) = 3
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1, 2]
// prev = fibRecursive(5 - 1) = 4
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1, 2, 3]
// prev = fibRecursive(6 - 1) = 5
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1, 2, 3, 5]
// prev = fibRecursive(7 - 1) = 6
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1, 2, 3, 5, 8]
// prev = fibRecursive(8 - 1) = 7
// current = fibRecursive[length - 1] + fibRecursive[length - 2] [0, 1, 1, 2, 3, 5, 8, 13]
