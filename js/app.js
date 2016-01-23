$(function() {

  $colorPicker = $('#color-picker');
//  $colorPicker.hide();

  //toggle color picker
  $('#color-picker-body').click(function() {
    //add animation class on click
    $colorPicker.addClass('animated slideInRight');
    //toggle the display of the color picker
    $colorPicker.toggle();
  });

  //color selecting
  $('div.color').click(function() {
    //current color with select
    $currentColor = $('div.color.select');
    //context of clicked element
    $(this).addClass('select');
    //remove class if currently active on an element.
    $currentColor.removeClass('select');
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



})(jQuery);
