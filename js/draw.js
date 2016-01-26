window.onload = function() {
  //VARIABLES
  var canvas = document.querySelector('#canv');
  var ctx = canvas.getContext('2d');
  var pos = { x: 0, y: 0 };
  //SET MOUSE VAR FALSE
  var mouseDown = false;
  var clear = document.querySelector('#clear');
  
  //CLEARS THE CANVAS
  clear.addEventListener('click', function() {
    console.log('testest');
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }, false);

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
