$(function() {

  //variables for main ul list
  var movieLists = $('.repertuar');
  //variables for url
  var movieUrl = 'http://api.coderslab.pl/movies';


  function editingInfo(information) {
    var info = $("<p>");
    info.text(information).addClass("editingInfo").prependTo($("body"));
  }

  function removeInfo() {
      var info = $(".editingInfo");
      info.remove();
  }


  function insertContent(movies) {
    movieLists.empty();
    $.each(movies, function(indexMovie, movie) {
      var li = $('<li>', {class: "movie"});
      li.attr("data-id", movie.id);        //dodanie do li id zgodnego z id filmu w bazie, konieczne do usuwania i zmieniania danych
      var h3 = $('<h3>').text(movie.title);
      var h5 = $('<h5>').text(movie.description);
      var button = $('<button class="deleter">Usuń</button>');
      var changer = $('<button class="changer">Zmień</button>');
      li.append(h3);
      li.append(h5);
      for (var i = 0; i < movie.screenings.length; i++) {
        var li2 = $("<li>").text(movie.screenings[i]["screening_date"]);
        li.append(li2);
      }
      li.append(button);
      li.append(changer);
      movieLists.append(li);
      });
    }


  function loadData() {
        $.ajax({
            	url: movieUrl,
              dataType: 'json',
              type: "GET"
        }).done(function(response){
            console.log(response);
     		   insertContent(response);
    	 }).fail(function(error) {
           console.log(error);
       })
  }

  loadData();

  function addMovie() {
    var button = $("#addMovie");
    button.on("click", function(e) {
      e.preventDefault();
      var title = $(".get_title").val();
      var description = $(".get_description").val();
      //var screeningDate = $(".get_screening");
      // chyba jakas petla ale each pobierał mi dane tylko pierwszego pola (ale trzy razy)


        //  console.log(screeningDate);
      var screening = $(".get_screening").val();
      console.log(title, description, screening);
      var data = {
        "title": title,
        "description": description,
        "screenings":[ {"screening_date": screening}, ]
      };
      $.ajax({
            url: movieUrl,
            type: "POST",
            data: JSON.stringify(data)   //bardzo bardzo wazne!!!
      }).done(function(response){
          console.log(response);
          loadData();
      }).fail(function(error) {
         console.log(error);
     })

    });

  }

  addMovie()


function addScreenings() {
  var button = $(".addScreenings");
  button.on("click", function(e) {
    e.preventDefault();
    var newArea = $('<textarea class="get_screening"></textarea>');
    newArea.insertBefore(button);
  });
}

addScreenings()







  function changeMovie() {
    movieLists.on("click", ".changer", function(e) {
      var ourMovie = $(this).parent();
      var id = ourMovie.attr("data-id");
      console.log("click to change " + id);
      var h3 = ourMovie.find('h3');
      var h5 = ourMovie.find('h5');

      if ($(this).hasClass("changing")) {
        var title = h3.text();
        var description = h5.text();
        editingInfo("Zmieniam dane");
        var data = {
                "title": title,
                "description": description,
                "screenings": []
              };
        $.ajax({
              url: movieUrl + "/" + id,
              type: "PUT",
              data: JSON.stringify(data)  //dawać zawsze gdy wysyłamy JSONa
        }).done(function(response){
            console.log(response);
           loadData();
       }).fail(function(error) {
           console.log(error);
       }).always(function() {
             removeInfo();
       });
      } else {
        h3.attr("contenteditable", true).addClass("editable");
        h5.attr("contenteditable", true).addClass("editable");
        $(this).text("Potwierdź zmianę").addClass("changing");
      }
  });
 }

 changeMovie();



/*

//my old solution

  function changeMovie() {
    movieLists.on("click", ".changer", function(e) {
    var ourMovie = $(this).parent();
    var id = ourMovie.attr("data-id");
    console.log("click to change " + id);
    var h3 = ourMovie.find('h3');
    var h5 = ourMovie.find('h5');
    h3.attr("contenteditable", true).addClass("editable");
    h5.attr("contenteditable", true).addClass("editable");
    $(this).text("Potwierdź zmianę");
          $(this).on("click", function() {
                var title = h3.text();
                var description = h5.text();
                var data = {
                        "title": title,
                        "description": description,
                        "screenings": []
                      };
                $.ajax({
                      url: movieUrl + "/" + id,
                      type: "PUT",
                      data: JSON.stringify(data)  //dawać zawsze gdy wysyłamy JSONa
                }).done(function(response){
                    console.log(response);
                   loadData();
               }).fail(function(error) {
                   console.log(error);
               });
        });
  });
 }

 changeMovie();

//lepsze rozwiązanie changeMovie to zrobic tylko jeden event,
//ale z ifami uzalezniajacymi efekt kliknięcia od tego czy button ma klasą nadawana podczas uruchamiania zmiany
*/

  function deleteMovie() {
      movieLists.on("click", ".deleter", function(e) {
      console.log("click");
      var id = $(this).parent().attr("data-id");
      editingInfo("Usuwam wpis");
      //przed opercja dodawac kod html do body z napisem usuwam lub innym wlasciwym
      //info.prependTo(movieLists)  //to powodowało, ze samo odswiezenie danych kasowalo napis bez uzycia always
      $.ajax({
            url: movieUrl + "/" + id,
            type: "DELETE"
      }).done(function(response){
          console.log(response);
          loadData();
      }).fail(function(error) {
         console.log(error);
       //always, ktore usuwa wstawiony powyzej napis po zakonczeniu operacji
       //to dodawanie i usuwanie powinno być zrobione w funkcjach, to keep code DRY :)
     }).always(function() {
        removeInfo();
     });


  });
}

  deleteMovie();



});
