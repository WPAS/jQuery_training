$(document).ready(function() {
console.log("działa");

function slider() {
  var next = $("#nextPicture");
  var prev = $("#prevPicture");
  var slider = $(".slider")
  var li = slider.find("li");
  var ul = slider.find("ul");

  //przechowuje aktualny indeks wyświetlonego obrazka
  var index = 0;

  //szerokość jednego li
  var widthLi = li.first().width();
  //console.log(widthLi);

  //console.log(next, prev, li);

  //szerokość całego ul
  ul.width(li.length*widthLi);

    //number navigation :)
  for (var i = 1; i <= li.length; i++) {
    $("<button>").text(i).appendTo(slider);
  }

  var buttons = slider.find("button");
  buttons.first().addClass("chosen");

  function changeButtons() {
    if (buttons.hasClass("chosen")) {
      buttons.removeClass("chosen");
    }

    buttons.eq(index).addClass("chosen");
    }

    slider.on("click", "button", function() {
      var clickedButton = $(this);
      index = clickedButton.text() - 1;
      ul.css("left", -(index * widthLi));
      changeButtons();
    });

 //next prev navigation

  next.on("click", function() {
    index++;
    if(index == li.length) {
      index = li.length -1;
    }
    ul.animate({left: -(index*widthLi)}, 1000)
    changeButtons()
  })

  prev.on("click", function() {
    index--;
    if(index < 0) {
      index = 0;
    }
    ul.animate({left: -(index*widthLi)}, 1000)
    changeButtons()
  })



}

slider();


//buttons for choosing photos

//powinny byc generowane automatycznie w zaleznosci od liczby zdjec
//powinny miec numerki przydzielane w oparciu o index
















});
