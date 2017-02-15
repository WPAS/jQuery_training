$(document).ready(function() {
console.log("działa");


$h1 = $("h1");
$p = $("p");


$h1.on("click", function() {
  //console.log("ouch!!");
  $this = $(this).next();
  $this.slideToggle();
  $p.not($this).slideUp();     //KONIECZNIE ZAPAMIETAĆ!!

});

//seems that it works ok


















});
