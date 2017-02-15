$(document).ready(function() {
console.log("działa");

function parallax() {
  var $scene = $(".scene");
  var $elements = $(".element");
  var oldMousePositionX = 0;
  var oldMousePositionY = 0;
  console.log($scene, $elements);

  $elements.each(function() {
    $element = $(this);
    var $left = $element.data("x");
    var $top = $element.data("y");
    var $zIndex = $element.data("z")
    //console.log($left, $top, $zIndex);
    $(this).css({"left": $left, "top": $top, "z-index": $zIndex})
  });

  $scene.on("mouseenter", function(e) {
    oldMousePositionX = e.offsetX;
    oldMousePositionY = e.offsetY;
    //console.log(oldMousePositionX, oldMousePositionY);
  });

  $scene.on("mousemove", function(e) {
    currentMousePositionX = e.offsetX;
    currentMousePositionY = e.offsetY;
    //console.log("normal" + currentMousePositionY, currentMousePositionX);
    var $target = $(event.target);
    if ($target.is(".element")) {
      currentMousePositionX += $target.data("x");
      currentMousePositionY += $target.data("y");
      //console.log("modified" + currentMousePositionY, currentMousePositionX);
    }
    var mouseMoveX = currentMousePositionX - oldMousePositionX;
    var mouseMoveY = currentMousePositionY - oldMousePositionY;

    $elements.each(function() {
      $element = $(this);
      var $left = $element.data("x");
      var $top = $element.data("y");
      var $zIndex = $element.data("z")
      var $newleft = $left + mouseMoveX * $element.data("speed");
      var $newtop = $top + mouseMoveY * $element.data("speed");
      //console.log($newleft, $newtop);
      $(this).css({"left": $newleft, "top": $newtop, "z-index": $zIndex})
    });


  });

}
parallax();

//I suppose it works as it should, but in that example it doesn't seem to be useful ;)

});
