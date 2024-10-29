const canvasEle = document.querySelector("canvas");

canvasEle.width = window.innerWidth;
canvasEle.height = window.innerHeight;

var c = canvasEle.getContext("2d");

// c.fillStyle = "rgba(200, 0, 0, 0.4)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.4)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.4)";
// c.fillRect(300, 200, 100, 100);

// c.beginPath();
// c.moveTo(60, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "pink";
// c.stroke();

// for (let i = 0; i <= 40; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

// }

function Circle(x, y) {
  this.x = x;
  this.y = y;

  this.draw = function () {};
}

var circle = new Circle(200, 200);

let x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = Math.random() - 0.5 * 8;
var dy = Math.random() - 0.5 * 8;
let radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerWidth || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate();
