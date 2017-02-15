# jQuery &ndash; zadanie
# Sticky menu

Napisz **sticky menu**, czyli takie, które jest przyklejone do górnej krawędzi przeglądarki podczas skrolowania.
Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML i CSS dodanym do zadania. Menu jest trzymane w liście.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany, i sprawdź, czy działa (np. przez wyświetlenie w konsoli napisu "Działa").

## Punkt 3
Znajdź następujące elementy i zapisz je do zmiennych:

1. Element **nav**, który będzie nam potrzebny do tego, aby po wyciągnięciu menu nie podskakiwała nam cała treść do góry. Ma on już ustawioną wysokość w pliku **style.css**.
2. Element **ul** o **klasie** ```menu```.
3. Zmienna przechowująca pozycję (top) elementu o **klasie** ```menu```.

Sprawdź, czy wyszukałeś odpowiednie elementy i czy ich liczba się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.

## Punkt 4
Ustaw na elemencie **window** event reagujący na skrolowanie. Sprawdź, czy działa.

## Punkt 5
Podczas skrolowania sprawdź, kiedy przyczepić menu do górnej belki. Stwórz zmienną i pobierz do niej liczbę pikseli, o którą został przewinięty cały element ```document```  (```scrollTop```).
Następnie porównaj otrzymaną wartość z pozycją menu. Jeżeli dystans dokumentu jest większy od dystansu menu, dodaj do menu **klasę** ```sticky```, w przeciwnym przypadku usuń tę klasę.

## Punkt 6
Ustaw na elemencie ```window``` kolejny event reagujący na zmianę szerokości okna. Sprawdź, czy działa.

## Punkt 7
Podczas zmiany szerokości okna dystans menu od górnej belki będzie się zmieniał. W tym celu utworzyliśmy event ```resize```.
Musimy tutaj sprawdzać ponownie dystans dla menu. Zrób warunek, który będzie sprawdzał tę odległość (jeżeli element menu ma **klasę** ```sticky```) i podstaw pod tą samą zmienną co wcześniej. W przeciwnym przypadku pobierz odległość od górnej belki dla elementu **nav**.

## Punkt 8
Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
