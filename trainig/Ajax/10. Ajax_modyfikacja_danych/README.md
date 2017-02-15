
# jQuery &ndash; zadanie
# Modyfikacja danych

# Zadanie 1
Pod adresem http://api.coderslab.pl/movies jest przechowywana baza filmów. Twoim zadaniem jest wczytanie ich do pliku **index.html** za pomocą metody ```ajax()```, konkretnie do elementu **ul** o **klasie** ```repertuar```.

Przydatne wskazówki:
* zapoznaj się z plikiem **index.html** (gdzie "wstrzyknąć" filmy?),
* zapoznaj się z plikiem JavaScript, wstaw pod odpowiednie zmienne: adres URL oraz element **ul**,
* wykorzystaj wiedzę (i kod) z poprzedniego zadania i wstaw tytuł filmu oraz opis do elementu **ul**.

# Zadanie 2
Zadanie polega na tym, aby po wpisaniu tytułu i krótkiego opisu do pól formularza o **klasie** ```add_movie``` filmy dodały się do bazy. W tym celu stwórz odpowiednią funkcję w pliku JavaScript np. o nazwie ```addMovie()```. Wewnątrz niej obsłuż formularz za pomocą odpowiedniego eventu.

Po uruchomieniu eventu pobierz dane z formularza i za pomocą metody ```ajax()``` wyślij je do bazy, ustaw odpowiednią metodę HTTP.

Pamiętaj o tym, aby odpowiednio skonstruować dane do wysłania. Przykład znajdziesz poniżej w opisie Api.


# Zadanie 3
Zadanie polega na usunięciu filmu z serwera. W tym celu:
* stwórz odpowiednią funkcję np. ```removeMovie()```,
* wróć do funkcji z zadania 1 i zmodyfikuj ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Usuń``` (pamiętaj o ustawieniu mu odpowiedniej klasy),
* wewnątrz funkcji ```removeMovie()``` ustaw event dla przycisku ```Usuń``` (sprawdź, czy działa),
* po uruchomieniu eventu wywołaj metodę ```ajax()``` z odpowiednimi ustawieniami do usunięcia określonego filmu,
* pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć film o **id=2** wysyłasz żądanie pod adres http://api.coderslab.pl/movies/2.

Skąd wziąć **id** filmu? Każdemu elementowi listy dodaj **id** (do tagu **li**). Pobierzesz je z danych zwróconych przy wczytywaniu filmów. Zmodyfikuj funkcję wczytującą filmy z zadania 1.

# Zadanie 4
Zmodyfikuj film na serwerze. W tym celu:
1. Stwórz odpowiednią funkcję np. ```updateMovie()```.
2. Wróć do funkcji z zadania 1 i zmodyfikuj ją tak, aby przy wczytywaniu filmów dodawała również przycisk ```Zmodyfikuj```  (pamiętaj o ustawieniu mu odpowiedniej klasy).
3. Wewnątrz funkcji ```updateMovie()``` ustaw event dla przycisku ```Zmodyfikuj``` (sprawdź, czy działa).
4. Przy modyfikacji musisz także wysłać odpowiednie dane pobrane z treści strony. W tym celu wewnątrz eventu obsługującego przycisk ```Zmodyfikuj```napisz kod dodający do elementu **li** atrybut ```contenteditable``` i ostyluj go odpowiednio (białe tło, obramowanie). W trakcie edycji zmień również napis na przycisku z ```Zmodyfikuj``` na ```Zatwierdź``` (pamiętaj o ustawieniu mu odpowiedniej klasy).
5. Pobierz zmienione dane po kliknięciu w przycisk ```Zatwierdź``` i wyślij je za pomocą metody ```ajax()``` do bazy.

Pamiętaj, że musisz odwołać się do konkretnego adresu np. jeżeli chcesz usunąć film o **id=2** wysyłasz żądanie pod adres http://api.coderslab.pl/movies/2. Skąd wziąć **id** filmu? To już wiesz z poprzedniego zadania.


## Opis API  &ndash; zasoby
* GET: http://api.coderslab.pl/movies -> zwraca tablicę z obiektami filmów.

* GET: http://api.coderslab.pl/movies/{id} -> zwraca jeden film + jego seanse. Zwraca **false**, jeśli nie ma takiego filmu.

* POST: http://api.coderslab.pl/movies -> dodaje nowy film do bazy. JSON powinien wyglądać tak:
```JSON
{
  "title": "Foo",
  "description": "bar",
  "screenings":[
    {
      "screening_date": "Foo screening 1"
    },
    {
      "screening_date": "Foo screening 2"
    }
  ]
}
```
* PUT: http://api.coderslab.pl/movies/{id} -> zmienia film. JSON powinien wyglądać tak:
```JSON
{  
   "title": "FOOBAR",
   "description": "BARFOO",
   "screenings":[  
      {  
         "screening_date": "Foo screening 1"
      },
      {  
         "screening_date": "Foo screening 2"
      },
      {  
         "screening_date": "Foo screening 3"
      },
      {  
         "screening_date": "Foo screening 4"
      }
   ]
}
```
Można dowolnie modyfikować liczbę seansów filmu (ale trzeba podać wszystkie &ndash; jak nic nie podamy, to stare seanse są kasowane). Inaczej mówiąc, jeśli dodasz tylko nowy seans, to nadpisze on wszystkie inne. API zwraca seans, jeżeli się udało, ```false``` jeżeli nie.

* DELETE: http://api.coderslab.pl/movies/{id} -> Kasuje film. Zwraca zawsze ```true```.

#Zadanie 5*, dla chętnych
Przejdź wszystkie wcześniejsze zadania i wczytaj/dodawaj/modyfikuj również seanse dla każdego filmu. Sprawdź, jak wygląda JSON przy wczytywaniu danych.
