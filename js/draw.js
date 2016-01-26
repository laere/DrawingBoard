window.onload = function() {
  //VARIABLES
  var canvas = document.querySelector('#canv');
  var pos = { x: 0, y: 0 };
  //SET MOUSE VAR FALSE
  var mouseDown = false;

  //DRAW EVENTS
  //MOUSEDOWN = TRUE
  canvas.addEventListener('mousedown', function(e) {
    lastEvent = e;
    mouseDown = true;
  }, false);
  canvas.addEventListener('mousemove', draw, false);
  //PREVENTS DRAWING WITHOUT MOUSEDOWN = TRUE;
  canvas.addEventListener('mouseup', function() {
    mouseDown = false;
  }, false);
  //PREVENTS DRAWING IF MOUSE LEAVES AND COMES BACK TO CANVAS
  canvas.addEventListener('mouseleave', function() {
    mouseDown = false;
  }, false);
  function setPosition(e) {
    pos.x = e.offsetX;
    pos.y = e.offsetY;
  }
  //SET CANVAS CONTEXT
  function draw(e) {
    var ctx = canvas.getContext('2d');
    //IF TRUE, DRAW
    if (mouseDown) {
      ctx.beginPath(); // begin
      ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      setPosition(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = $('.select').css('background-color');
      ctx.stroke();
      lastEvent = e;
    } else if (!mouseDown) {
        return;
    }
    e.preventDefault();
  }
};
