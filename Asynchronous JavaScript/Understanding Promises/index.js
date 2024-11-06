// // const btn = document.querySelector("button");

// // function buyNow(cb) {
// //   setTimeout(cb, 3000);
// // }

// // btn.addEventListener("click", () => {
// //   function afterPayment() {
// //     console.log("payment done");
// //   }

// //   buyNow(afterPayment);
// // });

// function resolver(resolve, reject) {
//   //   setTimeout(() => {
//   //     resolve("Burger");
//   //   }, 5000);
//   setTimeout(() => {
//     reject("Burger");
//   }, 5000);
// }

// let recipt = new Promise(resolver);

// function wait(cb) {
//   setTimeout(cb, 5000);
// }

// // wait(() => {
// //   console.log("Hello promise");
// // });

// function waitPr() {
//   return new Promise((res, rej) => {
//     setTimeout(res, 5000);
//   });
// }

// let time = waitPr().then(() => console.log("Hello Promise"));

// let initail = new Promise((res, rej) => {});

// let fullfilled = new Promise((res, rej) => {
//   res(100);
// });

// let rejected = new Promise((res, rej) => {
//   rej("something went wrong!");
// });

// let five = new Promise((res, rej) => {
//   res(5);
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const root = document.querySelector("div");

let data = fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((userData) =>
    userData.posts.map((post) => {
      let h3 = document.createElement("h3");
      h3.innerText = post.title;

      root.append(h3);
    })
  );
