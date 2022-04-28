var canvas = document.querySelector("#draw");
var ctx = canvas.getContext("2d");
let hue = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = "50";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  lastX = e.offsetX; // to move to origin and start from mouse click on canvas location
  lastY = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  console.log(hue);
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
