$(function() {

  //variables for main ul list
  var movieLists = $('.repertuar');
  //variables for url
  var movieUrl = 'http://swapi.co/api/films';


  /* Insert Movies to DOM  */
  function insertContent(movies) {
    $.each(movies, function(indexMovie, movie) { //indexMovie musimy podać, aby jQuery rozumiał, ze movie to wartość (pierwszym parametrem jest zawsze index)
        var li = $('<li>', {class: "movie"}); //nadajemy klasę movie, ale nie ma to znaczenia dla samego ajax,
        var h3 = $('<h3>').text(movie.title);
        var h5 = $('<h5>').text(movie.director);
        var button = $("<button>Opening Crawl</button>");
        li.append(h3);
        li.append(h5);
        li.append(button);

        movieLists.append(li);
        button.each(function() {
          $(this).one("click", function() {
            var p = $('<p>').text(movie.opening_crawl);
            li.append(p);
          });
        });
      });
    }

  /* Load movies and insert them into the DOM
  */
  function loadMovies() {
        $.ajax({
            	url: movieUrl
        }).done(function(response){
            console.log(response);
     		    insertContent(response.results);
    	 }).fail(function(error) {
           console.log(error);
       })
  }

  loadMovies();

});
