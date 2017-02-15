$(document).ready(function() {
console.log("działa");

var $nav = $("nav");
var $menu = $(".menu");
var $location = $menu.position().top;

//console.log($nav, $menu, $location);



$(window).on("scroll", function() {
  $scrolled = $(document).scrollTop();
  console.log($scrolled, $location);
  if ($scrolled > $location) {
    $menu.addClass("sticky");
  } else {
    $menu.removeClass("sticky");
  }
});


$(window).on("resize", function() {
    $altLocation = $nav.position().top;
    if ($menu.hasClass("sticky")) {
      $location = $menu.position().top;
    } else {
      $location = $altLocation;
    }
    if ($location < $altLocation) {
      $location = $altLocation;
    }
    //I have added last condition to avoid situations when menu was glued above nav which could happen when $location became 0 after widening the window

});





});
