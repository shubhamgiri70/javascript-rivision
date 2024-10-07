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
