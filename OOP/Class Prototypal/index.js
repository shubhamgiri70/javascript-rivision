// title (title of the question)
// options (array of options)
// correctAnswerIndex (index of the correct option)

// let quizMethods = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex ? true : false;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// function quizApp(title, optionsArr, correctAnswerIndex) {
//   let question = Object.create(quizMethods);
//   question.title = title;
//   question.options = optionsArr;
//   question.correctAnswerIndex = correctAnswerIndex;

// quizApp.prototype = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex ? true : false;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

// function quizApp(title, optionsArr, correctAnswerIndex) {
//   let question = Object.create(quizApp.prototype);
//   question.title = title;
//   question.options = optionsArr;
//   question.correctAnswerIndex = correctAnswerIndex;

//   return question;
// }

// function QuizApp(title, optionsArr, correctAnswerIndex) {
//   this.title = title;
//   this.options = optionsArr;
//   this.correctAnswerIndex = correctAnswerIndex;
// }

// QuizApp.prototype = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswerIndex ? true : false;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswerIndex];
//   },
// };

class Quiz {
  constructor(title, optionsArr, correctAnswerIndex) {
    this.title = title;
    this.options = optionsArr;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new Quiz(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Quiz(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
