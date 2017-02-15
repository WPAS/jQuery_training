
$(document).ready(function() {
console.log("działa");

function slider() {
  var next = $("#nextPicture");
  var prev = $("#prevPicture");
  var slider = $(".slider")
  var li = slider.find("li");
  var ul = slider.find("ul");

  //przechowuje aktualny indeks wyświetlonego obrazka
  var index = 1;

  //szerokość jednego li
  var widthLi = li.first().width();
  //console.log(widthLi);

  //console.log(next, prev, li);

  //szerokość całego ul

//number navigation :) (my own add on to the exercise)
for (var i = 1; i <= li.length; i++) {
  $("<button>").text(i).appendTo(slider);
}

var buttons = slider.find("button");
buttons.first().addClass("chosen");

function changeButtons() {
  if (buttons.hasClass("chosen")) {
    buttons.removeClass("chosen");
  }

  buttons.eq(index-1).addClass("chosen");
  }

slider.on("click", "button", function() {
    var clickedButton = $(this);
    index = clickedButton.text();
    ul.css("left", -(index * widthLi));
    changeButtons();
});


  //infinite slider part
  var first = li.first().clone();
  var last = li.last().clone();
  ul.append(first).prepend(last);
  ul.css("left", -widthLi);

  ul.width((li.length + 2) * widthLi);


  next.on("click", function() {
    index++;
    console.log(index);
    ul.animate({left: - (index*widthLi)}, 1000, function() {
    if(index > li.length) {
      index = 1;
      ul.css('left', -widthLi);
    }
    changeButtons()
   });
  })

  prev.on("click", function() {
    index--;
    console.log(index);
    ul.animate({left: -(index*widthLi)}, 1000, function() {
    if(index < 1) {
        index = li.length;
        ul.css('left', -widthLi * index);
      }
    changeButtons()
    });
  })


}

slider();


//the problem is that if we click very fast a few times in a row without waiting for animation, then slider goes crazy,
// and index can go for short time out of our limits, even to negatives
















});
