// If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

// For single question we need the following data and methods:
// Data:
// title (title of the question)
// options (array of options)
// correctAnswerIndex (index of the correct option)
// Methods:
// isAnswerCorrect (will accept the index and returns true or false based on the answer is correct or not)
// getCorrectAnswer (will return the correct answer of the quiz when the function is called)
// Create the object using the following ways
// For each different ways of creating object write different solutions.

// Without Object
// Organize using object
// Use a function to create object
// Convert the function to use this keyword
// Write test by creating two objects also test both methods.
// To test use the following data
// const testData = {
//   title: 'Where is the capital of Jordan',
//   options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex: 1,
// };

// let title = "Where is the capital of Jordan";
// let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
// let correctAnswerIndex = 1;

// function isAnswerCorrect(i) {
//   if (i === correctAnswerIndex) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getCorrectAnswer() {
//   return options[correctAnswerIndex];
// }

// let quizApp = {
//   title: "Where is the capital of Jordan",
//   options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   correctAnswerIndex: 1,
//   isAnswerCorrect(i) {
//     if (i === quizApp.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   getCorrectAnswer() {
//     return quizApp.options[quizApp.correctAnswerIndex];
//   },
// };

// function quizApp(title, options, correctAnswerIndex) {
//   let quiz = {};
//   quiz.title = title;
//   quiz.options = options;
//   quiz.correctAnswerIndex = correctAnswerIndex;
//   quiz.isAnswerCorrect = function (i) {
//     if (i === quiz.correctAnswerIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   quiz.getCorrectAnswer = function () {
//     return quiz.options[quiz.correctAnswerIndex];
//   };
//   return quiz;
// }

// let quiz1 = quizApp(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );

function quizApp(title, options, correctAnswerIndex) {
  let quiz = {};
  quiz.title = title;
  quiz.options = options;
  quiz.correctAnswerIndex = correctAnswerIndex;
  quiz.isAnswerCorrect = function (i) {
    if (i === this.correctAnswerIndex) {
      return true;
    } else {
      return false;
    }
  };
  quiz.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return quiz;
}

let quiz1 = quizApp(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
