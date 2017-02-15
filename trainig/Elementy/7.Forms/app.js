$(document).ready(function() {
//console.log("działa");

function form() {
  var $form = $("form");
  var $name = $("#nameInput");
  var $email = $("#emailInput");
  var $message = $("#messageInput");
  var $error = $(".error");
  console.log($form, $name, $email, $message, $error);

  $form.on("submit", function(e) {
    e.preventDefault();
    var $userName = $name.val();
    var $userEmail = $email.val();
    var $userMessage = $message.val();
    //console.log($userName, $userEmail, $userMessage);
    if ($userName.length < 5) {
      $error.html("<p>Twoje imię jest za krotkie</p>");
    }
    if ( ($userEmail.indexOf("@") === -1) || ($userEmail.indexOf(".") === -1) ) {
      $error.html("<p>Podaj prawidłowy adres email</p>");
    }
    if ($userMessage.length < 10) {
      $error.html("<p>Wiadomość jest za krotka</p>");
    }

  });

}

form();

//if code is written like it is explained in readme we are not sending data, we prevent it and then validate, but when all inputs are ok nothing happenes
//we had better form with sending data at jQuery exam ;)


});
