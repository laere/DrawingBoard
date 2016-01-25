
var pos = { x: 0, y: 0 };
var container = document.querySelector('#container');
var canvas = document.createElement('canvas');
//var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

canvas.style.width = "65%";
canvas.style.height = "65%";
canvas.style.border = '1px solid black';
container.appendChild(canvas);

canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mousedown', setPosition, false);
canvas.addEventListener('mouseenter', setPosition, false);

function setPosition(e) {
  pos.x = e.pageX;
  pos.y = e.pageY;
}
function draw(e) {
  ctx.beginPath(); // begin
  
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}
