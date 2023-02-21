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
