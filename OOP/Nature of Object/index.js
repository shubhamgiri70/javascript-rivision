// let userMethods = {
//   increaseScore: function (value = 1) {
//     this.score = this.score + value;
//     return this.score;
//   },
//   decreaseScore: function (value = 1) {
//     this.score = this.score - value;
//     return this.score;
//   },
//   changeName: function (name) {
//     this.name = name;
//     return this.name;
//   },
// };

// function createUser(name, score = 0) {
//   let user = Object.create(userMethods);

//   user.name = name;
//   user.score = score;

//   return user;
// }

// let user1 = createUser("sameer", 20);
// let user2 = createUser("Zoya", 30);

// console.log(user1.name);
// console.log(user1.score);

// console.log(user2.name);
// console.log(user2.score);

// create a function for book object
// we will need to create new object useing Object.create
// we will store all the methods inside n object
// use this to access object

// let bookMethods = {
//   getSummary: function () {
//     console.log(
//       `${this.name} is written by ${this.author} and it contains ${this.noOfPages} pages`
//     );
//   },
//   changePage: function (pages) {
//     this.noOfPages = pages;
//     return this.noOfPages;
//   },
//   changeAuthor: function (authorName) {
//     this.author = authorName;
//     return this.author;
//   },
// };

// function createBook(name, author, noOfPages) {
//   let book = Object.create(createBook.prototype);

//   book.name = name;
//   book.author = author;
//   book.noOfPages = noOfPages;

//   return book;
// }

// createBook.prototype = {
//   getSummary: function () {
//     console.log(
//       `${this.name} is written by ${this.author} and it contains ${this.noOfPages} pages`
//     );
//   },
//   changePage: function (pages) {
//     this.noOfPages = pages;
//     return this.noOfPages;
//   },
//   changeAuthor: function (authorName) {
//     this.author = authorName;
//     return this.author;
//   },
// };

// function CreateBook(name, author, noOfPages) {
//   this.name = name;
//   this.author = author;
//   this.noOfPages = noOfPages;
// }

// CreateBook.prototype = {
//   getSummary: function () {
//     console.log(
//       `${this.name} is written by ${this.author} and it contains ${this.noOfPages} pages`
//     );
//   },
//   changePage: function (pages) {
//     this.noOfPages = pages;
//     return this.noOfPages;
//   },
//   changeAuthor: function (authorName) {
//     this.author = authorName;
//     return this.author;
//   },
// };

class Book {
  constructor(name, author, noOfPages) {
    this.name = name;
    this.author = author;
    this.noOfPages = noOfPages;
  }
  getSummary() {
    console.log(
      `${this.name} is written by ${this.author} and it contains ${this.noOfPages} pages`
    );
  }
  changePage(pages) {
    this.noOfPages = pages;
    return this.noOfPages;
  }
  changeAuthor(authorName) {
    this.author = authorName;
    return this.author;
  }
}

let book1 = new Book("who we are", "sadguru", 302);
let book2 = new Book("pablo", "santani ros", 234);
