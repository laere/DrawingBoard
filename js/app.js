$(function() {
  $colorPicker = $('#color-picker');
  $divColor = $('div.color');
  //  $colorPicker.hide();
  updateColor();
  //toggle color picker
  $('#color-picker-body').click(function() {
    //add animation class on click
    $colorPicker.addClass('animated slideInRight');
    //toggle the display of the color picker
    $colorPicker.toggle();
  });


  $('#add-color').click(function() {
    //when button is clicked
    $colors = $('#colors');
    //create div ele with class'color'
    //append it to the container '#colors'
    //later this will be the color the player creates
    $colors.append('<div class=color></div>');
    //find a way to limit the amount of colors a user can add.
  });

  //color selecting
  $divColor.click(function() {
    //current color with select
    $currentColor = $('div.color.select');
    //context of clicked element
    $(this).addClass('select');
    //remove class if currently active on an element.
    $currentColor.removeClass('select');
  });

  //Test function//
  $('html').click(function() {
  });

  //Problem: sliders don't have functionality
  //Solution: When sliders are moved they show the colors

  //convert the rgb values to hex
  function rgbToHex(r,g,b) {
    $hexRed = r.toString(16);
    $hexGreen = g.toString(16);
    $hexBlue = b.toString(16);
    console.log($hexRed);
    console.log($hexGreen);
    console.log($hexBlue);
    return '#' + $hexRed + $hexGreen + $hexBlue;
  }
  //update the 'Your Color' with rgb color;

  function updateColor() {
    $colorChosen = $('#color-chosen');
    $color = rgbToHex(55,22,111);
    $colorChosen.css('background-color', $color);
  }

});
