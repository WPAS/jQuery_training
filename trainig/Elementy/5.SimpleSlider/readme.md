# jQuery &ndash; zadanie
# SimpleSlider

Napisz prosty slider. Zadanie podzielone jest na punkty. Trzymaj się dokładnie treści punktów i rób je po kolei. Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się z kodem HTML dodanym do zadania. Do zrobienia slidera zazwyczaj musimy odpowiednio dostosować style dla listy, w której znajdują się obrazki.
Dlatego po dodaniu **klasy** ```slider``` do odpowiedniego elementu zrób następujące kroki w pliku **style.css**:

1. Ustaw elementy listy obok siebie. Jak widzisz nie wszystkie obrazki mieszczą się obok siebie. Trzeba zatem ustawić kontenerowi zewnętrznemu (**ul**) taką szerokość, aby zmieściły się wszystkie obok siebie. Zrobimy to za pomocą jQuery, ale spróbuj na razie ustawić w pliku **style.css** taką szerokość kontenera, aby wszystkie obrazki się zmieściły. Zrób to tylko po to, aby przetestować jak ustawią się elementy. Po przetestowaniu możesz usunąć tą szerokość z pliku css.
2. Wyzeruj margines i padding dla elementu **ul** (pamiętasz, że przeglądarka nadaje domyślne style niektórym elementom?)
3. Ustaw szerokość kontenera nad elementem **ul** na szerokość jednego obrazka i nadaj mu styl ```overflow: hidden```.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać, używając jQuery) i sprawdź, czy działa (np poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję odpowiedzialną za całą animację galerii. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

W stworzonej funkcji znajdź następujące elementy i zapisz je do zmiennych:

1. Przycisk `Next`.
2. Przycisk `Prev`.
3. Wszystkie elementy listy (zapisz do tablicy).
4. Dodaj zmienną liczbową, która będzie określała indeks widocznego obrazka (na początku będzie to pierwszy obrazek &ndash; czyli zmienna będzie wskazywała na index **0**).
5. Ustaw też kolejną zmienną, która będzie przetrzymywać szerokość jednego obrazka. Przyda nam się za chwilę, aby ustawić szerokość kontenera **ul** z wszystkimi obrazkami za pomocą jQuery, a nie CSS).

Sprawdź, czy wyszukałeś odpowiednie elementy, i czy ich liczba się zgadza. Wypisz zmienne w konsoli, aby upewnić się, czy zawierają poprawne dane.

## Punkt 3
Ustaw w funkcji szerokość kontenera **ul** na podstawie danych, które przetrzymują Twoje zmienne, tak aby wszystkie obrazki mieściły się obok siebie (pamiętaj, aby usunąć szerokość kontenera z pliku **style.css**).

## Punkt 4
Do przycisku `Next` dodaj event, który zareaguje na kliknięcie (nie używaj pętli &ndash; działamy w jQuery).
Event na razie ma wyświetlać jakiś tekst w konsoli.

## Punkt 5
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. Zwiększyć zmienną przetrzymującą indeks obrazka.
2. Sprawdzić, czy przypadkiem zmienna nie przekracza liczby wszystkich obrazków.
3. Jeśli wszystko jest w porządku, zaanimuj przesuwanie slajdu (wykorzystaj własność ```left```). Pamiętaj, że element, który przesuwasz (**ul**), musi mieć ustawione w CSS ```position: relative```. Zastanów się, w którą stronę chcesz się przesuwać.

## Punkt 6
Dodaj drugi event dla przycisku `Prev`. Wykonaj takie same kroki jak dla eventu `Next`. Pamiętaj tylko o warunku, którego nie może przekroczyć zmienna określająca indeks obrazka w drugą stronę oraz o kierunku przesuwania. Wciąż używamy własności ```left```.

## Punkt 7* (dla chętnych)
Spróbuj stworzyć jeszcze jedną funkcję, która będzie odpowiedzialna za przesuwanie slajdu po kliknięciu w dowolny przycisk. Zastanów się, jakie parametry należy do niej przekazać. Ustaw jej odpowiednią nazwę i komentarz.

## Punkt 8
Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.
