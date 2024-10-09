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

function outer() {
  let count = 0;
  function next() {
    return count++;
  }
  return next;
}

let getNext = outer();

let first = getNext();
let second = getNext();

let nxt = outer();
let one = nxt();
let two = nxt();

function first() {
  let one = 1;
  function second() {
    let two = 2;
    function third() {
      let three = 3;
      function fourth() {
        let four = 4;
        console.log(one, two, three, four);
      }
      fourth();
    }
    third();
  }
  second();
}

first();

function outer() {
  let count = 0;
  let username = "Sam";
  function next() {
    console.log(username);
    return count++;
  }
  return next;
}

let getNext2 = outer();

// Write a function, outer that takes an input string. Inside the function outer define another function expression named sayHello which alerts the input. sayHello should be call immediately after it is defined.

function outer(str) {
  function sayHello() {
    alert(str);
  }
  sayHello();
}

// Write a function delay that accepts two arguments, a callback and the wait for the time in milliseconds (1000 ms is 1 second). delay should return a function that, when invoked waits for the specified amount of time before executing. (Use setTimeout)

function delay(cb, time) {
  setTimeout(() => {
    return cb();
  }, time);
}

// Write a function with a closure. The first function should only take one argument, someone's last name, and return the inner function. The returned inner function should take one more argument, someone's first name. When inner function when called it should console.log both the first name and the last name with a space.

function first(lastname) {
  return function inner(firstname) {
    console.log(`${firstname} ${lastname}`);
  };
}

// Create a storyWriter function that returns an object with two methods. One method, addWords adds a word to your story and returns the story while the other one, erase, resets the story back to an empty string. Here is an implementation:

function storyWriter() {
  let story = "";
  return {
    addWords: (word) => {
      return `${story} ${word}`;
    },
    erase: () => {
      return story;
    },
  };
}

// Create a function named nameFactory which accepts firstName and lastName and returns an object with multiple functions.
// getFullName: return the full name of the person with a space
// setFirstName: accepts a parameter first name using which updates the firstName and return the updated full name
// setLastName: accepts a parameter last name using which updates the firstName and return the updated full name

function nameFactory(firstName, lastName) {
  return {
    getFullName: () => {
      return `${firstName} ${lastName}`;
    },
    setFirstName: (firstname) => {
      return `${firstname} ${lastName}`;
    },
    setLastName: (lastname) => {
      return `${firstName} ${lastname}`;
    },
  };
}

// Create a function named createTag which accepts an HTML element name and returns another function.
// The returned function accepts a string (children) and returns the children with the tag you passed.

function createTag(element) {
  return function (srt) {
    return `<${element}>${srt}</${element}>`;
  };
}

// Write a higher-order function loop that provides something like a for loop statement. It takes a start value, a test function, an update function, and a body function.
// Use the start value as the initial value for the loop
// Passing the current value in test function can be used to determine when to stop the loop
// When test is true/truthy execute the body function with the current value
// After each iteration update the current value using update function passing the current value
// You can use normal for loop for this function

function loop(start, test, update, body) {
  for (let i = start; test(i); i = update(i)) {
    body(i);
  }
}

// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

