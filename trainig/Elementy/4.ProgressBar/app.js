$(document).ready(function() {
console.log("działa");


function progressBarAnimation() {
  var $buttons = $("button");
  var $bars = $("div");
  //console.log($buttons, $bars);

  $buttons.on("click", function() {
    var $progress = $(this).data("width");
    var $color = $(this).data("color");
    var $number = $(this).data("number");
    var $bar = $('#bar' + $number);    //we are catching correct bar
    var $span = $bar.find("span");
    $span.removeClass();    //removing old color
    $span.addClass($color);   //we are adding appropriate color
    $span.animate({
      width: $progress + "%"
    }, 25 * $progress);   //thanks to that animation time is proportional to progress

    console.log($bar);
    console.log($span);

  });



}

progressBarAnimation()








});
