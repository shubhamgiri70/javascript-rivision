// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// CreateUser.prototype = {
//   sayHello() {
//     alert(`welcome ${this.name}`);
//   },
// };

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    alert(`welcome ${this.name}`);
  }
}

let personOne = new User("Shubham", 25);
let personTwo = new User("Sunny", 21);
