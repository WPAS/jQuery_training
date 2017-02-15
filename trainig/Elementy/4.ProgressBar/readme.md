# jQuery &ndash; zadanie
# Progress Bar

Animuj element **span** w taki sposób, aby zasymulować działanie pasku postępu (Progress Bar) po kliknięciu w odpowiedni przycisk.
Po skończeniu zadania pamiętaj o zrobieniu commita.

## Punkt 1
Zapoznaj się dokładnie z kodem HTML i CSS dodanym do zadania. Pierw&ndash; szy krok to dokładne przejrzenie pliku **index.html** i zmodyfikowanie go.
Każdy **div** o klasie ```progress-bar``` ma przypisane trzy przyciski. Treść elementu sugeruje Ci, jakie należy ustawić atrybuty elementu **button**. Użyj atrybutu data z odpowiednimi prefiksami, np. zauważ, że animacja pierwszego paska postępu ma przebiegać do **50%** jego szerokości, w związku z tym jeden z atrybutów może mieć prefix dla data ```-width```.
Potrzebujesz jeszcze dwóch atrybutów:
* jednego &ndash; przechowującego numer paska postępu,
* drugiego &ndash; na kolor.

Plik CSS masz już przygotowany, przyjrzyj się mu również dokładnie.

## Punkt 2
Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany (pamiętaj, że zadanie masz rozwiązać w jQuery). Sprawdź, czy event działa (np. poprzez wyświetlenie w konsoli napisu "Działa").

Stwórz funkcję odpowiedzialną za animowanie paskami postępu. Pamiętaj o odpowiednich komentarzach i odpowiedniej nazwie dla funkcji.

Znajdź następujące elementy i zapisz je do zmiennych:

1. Wszystkie przyciski.
2. wszystkie elementy **div** symulujące paski postępu.

Sprawdź, czy wyszukałeś odpowiednie elementy. Czy ich liczba się zgadza.

Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.

## Punkt 3
Dodaj do wszystkich przycisków event reagujący na kliknięcie (nie używaj pętli &ndash; działamy w jQuery).
Event póki co ma wyświetlać jakiś tekst w konsoli.

## Punkt 4
Zmodyfikuj event tak, żeby po kliknięciu w przycisk:

1. Pobrać do zmiennych wszystkie atrybuty data.
2. Ustalić, który pasek postępu (**div**) dotyczy tego przycisku, w który kliknął użytkownik.
3. Wiesz już, w co kliknął użytkownik, i który progress-bar chcesz animować. Podstaw pod zmienną element ```span``` (wewnątrz **diva**).
4. Znalezionemu paskowi postępu ustaw odpowiednią klasę z kolorem, a także zaanimuj zmianę jego szerokości, na podstawie danych pobranych z data.

## Punkt 5
Sprawdź, jak działa Twoja strona. Czy widzisz jakieś problemy? Napisz.
