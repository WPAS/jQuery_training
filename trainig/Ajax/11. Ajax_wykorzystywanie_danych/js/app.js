$(function() {
  console.log("działa");

    // variables for DOM
    var $select = $("select");
    var $h1 = $("h1");

    //variables for url
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=7d9260a5-067d-4059-ac66-ef56d29a6355&country=PL&year=2015';

    function insertContent(holidays) {
      $.each(holidays, function(index, holiday) {         //index to data dnia w ktorym jest swieto
          var option = $("<option>").text(holiday[0].date);
          option.attr("value", holiday[0].date);
          option.appendTo($select);
        });


    }

    function showHoliday(allHolidays) {
      $select.on("change", function() {
        $h1.empty();
        $("h1.exception").remove();
        $.each(allHolidays, function(index, holiday) {
          if ($select.val() === index) {
            var ourHoliday = holiday[0].name;
            $h1.append(ourHoliday);
            if (holiday.length > 1) {
              for (var i = 1; i < holiday.length; i++) {
                var ourHoliday = holiday[i].name;
                var newh1 = $("<h1>");
                newh1.addClass("exception").text(ourHoliday);
                newh1.insertAfter($h1);
              }
            }
          }

        });

    })

  }

    function loadData() {
          $.ajax({
                url: holidayUrl,
                dataType: 'json',
                type: "GET",
          }).done(function(response){
             insertContent(response.holidays);
             showHoliday(response.holidays);
             $select.trigger("change");  //dzięki temu wydarzenie jest automatycznie wywoływane na pierwszym widocznym option po władowaniu strony
         }).fail(function(error) {
             console.log(error);
         })
    }

    loadData();



function movingButton() {
  var forest = $(".toMove");
  var forest2 = $(".toMove2");
  forest.delay(1000).animate({
        left: "+=100px"
      }, 2000, function(){
        forest.animate({
          width: forest.innerWidth() * 0.7 + "px",
          height: forest.innerHeight() * 0.7 + "px"
        }, 3000, function() {
          forest2.animate({
            top: "+=50px"
          }, 1000)
        });
      });

}

movingButton();

});
