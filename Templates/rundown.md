# Rundown

In diesem Dokument möchte ich erklären, wie ich mir vorstelle die App umzusetzen, im speziellen wie der Ablauf stattfinden soll.

Zwischen den einzelnen Schritten besteht immer die Möglichkeit Empfehlungen einzubauen. Dazu gehört z.B. das abändern einer Farbe oder eines schlecht gewählten Texts.

Bis zu diesem Zeitpunkt bereits implementierte Aufgaben werden nicht berücksichtigt.

<hr />

## Admin - Film Überblick

Es soll eine Liste der in der Datenbank enthaltenen Filme angezeigt werden.

https://github.com/StefanBehring/capstone-project/issues/50

<hr />

## Voting Komponente

### Die Komponente selbst

Im ersten Schritt soll die Komponente selbst einfach erstellt werden, ohne das sie über jegliche Funktionalität verfügt.

https://github.com/StefanBehring/capstone-project/issues/20

### Navigation

In der Navigation soll nun ein Link zur Home und zur Voting Seite platziert werden.

https://github.com/StefanBehring/capstone-project/issues/27

### GET 2 Filme von der Datenbank

Es sollen nun 2 Filme aus der Datenbank geladen werden, die dann in der Voting Komponente angezeigt werden. Es soll noch keine weiterführende Funktionalität existieren.

https://github.com/StefanBehring/capstone-project/issues/22

### Voting Funktionalität

In diesem Schritt soll es nun die Möglichkeit geben, dass der User die Filme bewerten kann. Dazu kann er auf den entsprechenden Like Button klicken. Nach seinem Vote wird er dann zur nächsten Auswahl geleitet.

https://github.com/StefanBehring/capstone-project/issues/23

#### Anmerkung

Die Funktionalität für 'I dont know the movie' kann hier noch nicht implementiert werden, da es noch keinen echten User gibt. Dies folgt erst in einem späteren Schritt.

<hr />

## Toplist

### Toplist Komponente

Auf dieser Seite soll der User eine Topliste sehen. Diese enthält erst einmal nur das Layout. Eine Verbindung zur Datenbank wird später implementiert.

https://github.com/StefanBehring/capstone-project/issues/25

### Navigation

Nun soll die Navigation einen Link zur Toplist erhalten.

https://github.com/StefanBehring/capstone-project/issues/29

### Datenbank

In diesem Schritt soll die Topliste nun Daten aus der Datenbank empfangen. Die Filme werden dabei nach dem Rating sortiert ausgegeben.

https://github.com/StefanBehring/capstone-project/issues/26

#### Anmerkung

Die eigentliche App ist zu diesem Zeitpunkt dann fertig. Inhalt der nun erstellt wird bezieht sich ausschließlich auf den User und seine Möglichkeiten, bzw. der Möglichkeiten die ein Gast hat.

Was auch noch fehlt ist das Styling für den Header. Da ich hier allerdings noch keine gute Idee habe, wird dies einer der zukünftigen Schritte sein.

<hr />

## Registrierung

### Formular

Dem Gast wird ein Formular präsentiert, welches er nutzen kann um einen Account zu erstellen und User zu werden. Es handelt sich hierbei lediglich um das Layout.

https://github.com/StefanBehring/capstone-project/issues/5

### Funktionalität

Hier soll nun die Funktionalität implementiert werden, damit der Gast auch wirklich einen Account erstellen kann. Sind die Daten korrekt wird ein User in der Datenbank angelegt.

Eine entsprechende Information, ob die Registrierung erfolgreich war soll auch erscheinen.

https://github.com/StefanBehring/capstone-project/issues/16
https://github.com/StefanBehring/capstone-project/issues/17

<hr />

## Login

### Formular

Das Gast wird ein Formular präsentiert, welches er nutzen kann um sich einzuloggen und den Status User zu erhalten. Es handelt sich hierbei lediglich um das Layout.

https://github.com/StefanBehring/capstone-project/issues/4

### Funktionalität

Hier soll nun die Funktionalität implementiert werden, damit der Gast sich auch wirklich einloggen kann.

Eine entsprechende Fehlermeldung soll auch ausgegeben werden; vorübergehend auch eine einfache "Success" Message. Die Weiterleitung zum Profil wird nach Erstellung der entsprechenden Komponente eingearbeitet.

https://github.com/StefanBehring/capstone-project/issues/18
https://github.com/StefanBehring/capstone-project/issues/19

<hr />

## Profil

### Layout

Dem User soll sein Profil angezeigt werden. Es beinhaltet noch keine Funktionalität.

Sobald das Layout erstellt ist kann auch die Weiterleitung nach dem Login hinzugefügt werden.

https://github.com/StefanBehring/capstone-project/issues/30

### Navigation

In der Navigation soll es einen Link zum Profil geben.

https://github.com/StefanBehring/capstone-project/issues/31

### Logout

Mit einem Klick auf den entsprechenden Button im Profil kann der User sich ausloggen.

https://github.com/StefanBehring/capstone-project/issues/38

### Account löschen

Mit einem Klick auf den entsprechenden Button im Profil kann der User seinen Account löschen.

Eine 'Schutzabfrage', ob er sich wirklich sicher ist soll erst in einem späteren Teil eingebaut werden.

https://github.com/StefanBehring/capstone-project/issues/39

### Editier Formular

In diesem Schritt soll das entsprechende Formular inklusive Funktionalität eingebaut werden.

https://github.com/StefanBehring/capstone-project/issues/40

<hr />

## Navigation

Da nun mehrere Rollen existieren (Gast/User/Admin) soll die Navigation entsprechend der Rolle des Nutzers reagieren.

Auch soll sicher gestellt werden, dass der Nutzer nur die Inhalte sieht, die für seine Rolle vorgesehen sind.

https://github.com/StefanBehring/capstone-project/issues/37

<hr />

## Voting Komponente

### 'I dont know the movie' Funktionalität

Nun da der User existiert kann er auch angeben, wenn er einen Film noch nicht kennt. Dies soll dann in der Datenbank vermerkt werden.

Bei der Auswahl der Filme soll dann darauf geachtet werden, dass der ausgewählte Film sich nicht in der 'I dont know the movie' Liste befindet.

https://github.com/StefanBehring/capstone-project/issues/24

<hr />

## Goodies

Ab diesem Zeitpunkt wäre die App MVP. Alles was nun noch kommt sind Inhalte die einfach nur Erweiterungen sind. Diese können dann vielseitig sein, wie z.B. die Sicherheitsabfrage beim löschen des Accounts.
