
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


  //Test function//
  // $('html').click(function() {
  //   console.log($redVal);
  // });


  //
  // Problem: sliders don't have functionality
  // Solution: When sliders are moved they show the colors

  var $red = 0;
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

   var $green = 0;
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

    var $blue = 0;
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
