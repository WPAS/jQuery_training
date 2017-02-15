$(document).ready(function() {
  //console.log("działa");

$li = $("li");
$text = $(".tabs").find("div");

$li.on("click", function() {
    $li.removeClass("selected");
    $(this).addClass("selected");
    var thisIndex = ($("li").index(this));
    var $ourText = $text.eq(thisIndex);
    $ourText.slideToggle();
    $text.not($ourText).slideUp();
});

















});
