
$(function() {
  $colorPicker = $('#color-picker');
  $divColor = $('div.color');

  //TOGGLE COLOR PICKER
  $('#color-picker-body').click(function() {
    //add animation class on click
    $colorPicker.addClass('animated slideInRight');
    //toggle the display of the color picker
    $colorPicker.toggle();
  });
  //ADD SELECTED COLOR
  $('#add-color').click(function() {
    //when button is clicked
    $colors = $('#colors');
    //create div ele with class'color'
    //append it to the container '#colors'
    //later this will be the color the player creates
    $colors.append('<div class=color></div>');
    //find a way to limit the amount of colors a user can add.
  });
  //INDICATE SELECTED COLOR
  $divColor.click(function() {
    //current color with select
    $currentColor = $('div.color.select');
    //context of clicked element
    $(this).addClass('select');
    //remove class if currently active on an element.
    $currentColor.removeClass('select');
  });
});

  //Test function//
  // $('html').click(function() {
  //   console.log($redVal);
  // });


  updateColor();
  //Problem: sliders don't have functionality
  //Solution: When sliders are moved they show the colors
  var mySavedValue = 0;

  function changeNumboxValue(value, number) {
     var $numBox = number;
     mySavedValue = value;
     $numBox.val(mySavedValue);
     console.log(mySavedValue);
   }
   function changeSliderVal(value, color) {
     var $slider = color;
     mySavedValue = value;
     $slider.val(mySavedValue);
     console.log(mySavedValue);
   }

  //CONVERT RGB TO HEX
  function rgbToHex(r,g,b) {
    $hexRed = r.toString(16);
    $hexGreen = g.toString(16);
    $hexBlue = b.toString(16);
    console.log($hexRed);
    console.log($hexGreen);
    console.log($hexBlue);
    return '#' + $hexRed + $hexGreen + $hexBlue;
  }
  //UPDATE COLOR BASED ON HEX VALUES
  function updateColor() {
    $colorChosen = $('#color-chosen');
    $color = rgbToHex();
    $colorChosen.css('background-color', $color);
  }
