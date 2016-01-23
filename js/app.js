$(function() {
  $colorPicker = $('#color-picker');
  $colorPicker.hide();

  //toggle color picker
  $('#color-picker-body').click(function() {
    //add animation class on click
    $colorPicker.addClass('animated slideInRight');
    //toggle the display of the color picker
    $colorPicker.toggle();
  });

  $('div.color').click(function() {
    //current color with select
    $currentColor = $('div.color.select');
    //context of clicked element
    $(this).addClass('select');
    //remove class if currently active on an element.
    $currentColor.removeClass('select');
  });

});
