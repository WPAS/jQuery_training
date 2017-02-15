# jQuery &ndash; zadanie
# Forms

Stwórz skrypt walidujący pola formularza oraz przesyłający dane pod adres: [http://api.coderslab.pl/showpost.php](http://api.coderslab.pl/showpost.php)

## Punkt 1
Zapoznaj się dokładnie z kodem HTML dodanym do zadania.
Do elementu ```form``` w odpowiednim atrybucie dopisz adres, pod który chcemy wysłać formularz.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać, używając jQuery) i sprawdź czy działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję odpowiedzialną za obsługę formularza. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Następnie znajdź następujące elementy i zapisz je do zmiennych:

1. Formularz.
2. Każde pole formularza (do oddzielnej zmiennej).
3. Element **div**, w którym będziemy pokazywać błędy, jeśli użytkownik wpisze coś nie tak.

Sprawdź, czy wyszukałeś odpowiednie elementy i czy ich liczba się zgadza.

Wypisz zmienne w konsoli, aby upewnić się, że zawierają poprawne dane.

## Punkt 3
Dodaj do formularza event ```submit```, który zareaguje na kliknięcie. Przekaż do funkcji callback złapany event. Zablokuj domyślne zachowanie eventu submit (pamiętasz funkcję ```event.preventDefault()```?)

## Punkt 4
Po kliknięciu w przycisk ```submit``` powinny być wykonane następujące kroki:

1. Pobierz do zmiennych wartości wpisane przez użytkownika do pól formularza. (Pamiętasz jak pobrać dane z pola input?)
2. Sprawdź każdą wprowadzoną wartość przez użytkownika w następujący sposób:
  * imię musi być dłuższe niż pięć znaków,
  * email powinien zawierać znak ```@``` oraz kropkę ```.```,
  * wiadomość powinna być dłuższa niż 10 znaków.

Jeśli którakolwiek z tych wartości jest niepoprawna, wypisz odpowiedni komunikat w **divie** o **klasie** ```error```.

## Punkt 5
Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
