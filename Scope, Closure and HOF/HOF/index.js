function outer(cb) {
  let numA = 21;
  let numB = 200;

  return cb(numA, numB);
}

function add(a, b) {
  return a + b;
}

console.log(outer(add));

function myMap(array, cb) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    final.push(cb(ele));
  }
}

function double(num) {
  return num * 2;
}

let arr = [1, 2, 3, 4, 5];

let double = myMap(arr, double);

// Write a higher order function that accepts a number and a operation function (callback function). Call the callback function passing the number as argument and return the returned value.

function hof(num, cb) {
  return cb(num);
}

function multiply(num) {
  return num * num;
}

let multiplyby5 = hof(5, multiply);

// Write a higher order function that accepts a string and a operation function (callback function). Call the callback function passing the string as argument and return the returned value.

function first(str, cb) {
  return cb(str);
}

function innerFn(str) {
  alert(`hey ${str}`);
}

let Shubham = first(Shubham, innerFn);

// Create a function by your choice that accepts a callback function.

function outer(num, cb) {
  return cb(num);
}

function add(num) {
  return num + 10;
}

let add20 = outer(20, add);

//  Create a higher order function called map that takes two inputs:
// An array of numbers/string/boolean etc
// A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with values that are the result of the 'callback' function on each element of the input array.

function map(arr, cb) {
  return cb(arr);
}

function inner(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(map([1, 2, 3, 4], inner));

//Create a higher-order function called forEach taht takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

function forEach(arr, cb) {
  cb(arr);
}

function innerFn(arr) {
  for (let ele of arr) {
    cb(ele);
  }
}

console.log(forEach([1, 2, 3, 4], innerFn));

// Create higher-order function called filter takes an array and a callback, and runs the callback on each element of the array if the return value of callback is truthy store in new array return the new array.

function filter(arr, cb) {
  let newAr = [];
  for (let ele of arr) {
    cb(ele);
    if (cb(ele)) {
      newAr.push(ele);
    }
  }
  return newAr;
}

function even(n) {
  return n % 2 === 0;
}

let evenArr = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], even);

// Implement forEach array method using Array.reduce
// forEach accepts two parameter array and callback
// It does not return anything
// It should work exactly like array forEach method


