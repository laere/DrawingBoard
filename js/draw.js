window.onload = function() {
  var pos = {x:0,y:0};
  var canvas = document.querySelector('#canv');
  var ctx = canvas.getContext('2d');

  function setPosition(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }
  function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#c0392b';

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
  }

  canvas.addEventListener('mousemove', draw, false);
  canvas.addEventListener('mousedown', setPosition, false);
  canvas.addEventListener('mouseenter', setPosition, false);
};
