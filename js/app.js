$(function() {
  $colorPicker = $('#color-picker');
  //TOGGLE COLOR PICKER!
  //When color picker is color-picker-body is clicked
  //show color picker;
  //when clicked again, hide color picker.
$('#color-picker-body').click(function() {
  $colorPicker.toggle('fast');
});




})(jQuery);
