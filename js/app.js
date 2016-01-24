
var $red = 0;
var $green = 0;
var $blue = 0;
$addColor = $('#add-color');
// Problem: sliders don't have functionality
// Solution: When sliders are moved they show the colors
//Data binding the RGB slider and input values
$addColor.click(function() {
  addColor();
});
/***********
DATA BINDING
***********/
//RED
function changeRedNumboxValue(value) {
  var $numBox = $('#redNumber');
  $red = value;
  $numBox.val($red);
  console.log($red);
  updateColor();
}
function changeRedSliderVal(value) {
  var $slider = $('#red');
  $red = value;
  $slider.val($red);
  console.log($red);
  updateColor();
}
//GREEN
function changeGreenNumboxValue(value) {
  var $numBox = $('#greenNumber');
  $green = value;
  $numBox.val($green);
  console.log($green);
  updateColor();
}
function changeGreenSliderVal(value) {
  var $slider = $('#green');
  $green = value;
  $slider.val($green);
  console.log($green);
  updateColor();
}
//BLUE
function changeBlueNumboxValue(value) {
  var $numBox = $('#blueNumber');
  $blue = value;
  $numBox.val($blue);
  console.log($blue);
  updateColor();
}
function changeBlueSliderVal(value) {
  var $slider = $('#blue');
  $blue = value;
  $slider.val($blue);
  console.log($blue);
  updateColor();
}
//USE CSS RGB SELECTOR
function rgb(r,g,b) {
  return "rgb("+r+","+g+","+b+")";
}
//UPDATE COLOR BASED RGB VALUES
function updateColor() {
  $colorChosen = $('#color-chosen');
  $colorChosen.css('background-color', rgb($red,$green,$blue));
}
updateColor();
//ADD COLORS
function addColor() {
  $colors = $('#colors');
  $div = $('<div class="color"></div>');
  //div element has the current bg color of color chosen
  $div.css('background-color', rgb($red,$green,$blue));
  //append div
  $colors.append($div);
  //SELECT FUNCTION
  $div.click(function() {
    $('.select').removeClass('select');
    $(this).addClass('select');
  });
}
//TOGGLE COLOR PICKER
$('#color-picker-body').click(function() {
  $colorPicker = $('#color-picker');
  //add animation class on click
  $colorPicker.addClass('animated slideInRight');
  //toggle the display of the color picker
  $colorPicker.toggle();
});
//DRAW FUNCTION
function draw(x, y) {
  $canvas = $('canvas');
  $ctx = $canvas.getContext('2d');
}
