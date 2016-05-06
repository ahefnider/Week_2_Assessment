$(document).ready(function() {
  var generateCounter = 0;
  $('body').css("background-color", "#FFFF00");
  $('.generate').append('<input type="button" id="generate" value="Generate">');
  $('.generate').on('click', function() {
    $('.clickCounter').remove();
    generateCounter++;
    $('.container').append('<div class="clickCounter">' + generateCounter + '</div>');
    $('.container').append("<div class='twoButtons'></div>");
    $('.twoButtons').append('<button id="bloop">Delete</button>');
    $('.twoButtons').append('<button id="colorChange">Change Color</button>');
  });
  $(document).on('click', '#bloop', function(){
    $(this).parent('div').remove();
  });
  // $(document).on('click', '#colorChange', function() {
  //
  // $('body').css('background-color', '#FF0000' );
  // }, function() {
  // $('body').css('background-color')=='#FFFF00');
  // });
  $(document).on('click', '#colorChange', function() {
    $('body').css('background-color', '#FF0000');
  });
});
// if($('body').css('background-color')=='#FFFF00'){
  // $('body').css('background-color', '#FF0000');
// } else {
//    $('body').css('background-color', '#FFFF00');
// }
