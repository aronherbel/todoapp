Assignment01: Understanding Web Basics
Welcome to your first assignment! In this module, we're diving into the bedrock of web development: HTML, CSS, and JavaScript. Additionally, we'll touch upon Bootstrap, a powerful toolkit that streamlines the web development process.

1. Delving into the Core: HTML, CSS, and JavaScript
   HTML (Index)
   HTML stands for HyperText Markup Language. It's the standard language for documents meant to be displayed in a web browser.

Tasks:
Investigate the basic structure of an HTML document. What are the key elements like <!DOCTYPE>, <html>, <head>, and <body>?

Antwort: 

<!DOCTYPE>

 ist dafür zuständig dem Webbrowser zusagen welche HTML version oder eine andere Markup sprache verwendet wird Webbrowser kann so die richtige Dartsellungsweise und Implementation wählen.

<html> markiert den beginn des HTML-Dokuments.

<head> beinhaltet Metadaten und Informationen über das Dokument.

<body> beinhaltet eigentlichen Inhalt des Dokuments und ist für die Anzeige im Browser bestimmt.

  -------

Understand the concept of HTML tags and attributes. How do they shape the content and appearance of a web page?

Antwort: 

Html verwendet Tags für die Strukturierung und Definition von Elementen.

Beispiele:

<button> 

<input>

Attribute enthalten zusätzliche informationen zu den Elementen. Sie werden im öffnenden Tag platziert.

<button class ="btn">
Add
</button>

<input type ="number" placeholder="dein Alter:" >

-----------------------------------------

Dive into HTML semantics. Why is it important, and how do elements like <header>, <nav>, and <article> contribute to it?

Antwort:

Sematische elemente dienen zur verständlichkeit der Webseite und haben keine Auswirkung auf die Ausgabe. im header kommen zum beispiel logo, Überschriften und Navigationselemente.

nav markiert die Hauptnavigationsleiste und weitere Menüs. 

article markiert eigenständige Inhalte die unabhänging von anderen Inhalten auf der Seite stehen können. Zum Beispiel Blog-Beiträge.

----------------------------

CSS
CSS, or Cascading Style Sheets, describes how HTML elements should be displayed on screen. It's what brings color, layout, and design to the web's content.

Tasks:
Explore the three ways to incorporate CSS into an HTML document: inline, internal, and external. What are the pros and cons of each method?

Antwort:

inline: einfach einzusetzen. man kann die dass CSS direkt in die HTML-Tag einbetten mit dem Style-Attribut.

Überschreibt andere CSS-Regeln für den Tag.

schnelle Anpassung.

Es kann schnell unübersichtlich werden.

Schwierigkeit bei überarbeitung für mehrere Elemente alles muss einzel geändert werden. 

<p style="color: blue; font-size: 16px;">Dieser Text ist blau und hat eine Schriftgröße von 16px.</p>

Internal:  CSS wird mit dem Tag <style> direkt im HTML dokument eingebunden.

Bessere Trennung als inline. 

Einfacher als externes CSS, wenn nur wenige oder einzelne Seiten gestalten werden.

<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>Dieser Text ist blau und hat eine Schriftgröße von 16px.</p>
</body>

external: CSS wird in externe Dateien gespeichert. 

Klare trennung von HTML und CSS. 

selbe externe Datei auf mehrere Seiten verwenden.

Mehr aufwand wegen erstellung und einbindung externer datei. 

----------------------------

Familiarize yourself with CSS properties and values. How do they define the appearance of HTML elements?

Antwort: 

Gestalten den Tag und mit Eigenschaften und Werten. Beispiel:

Background-Color: black;

font-size: 2em;

margin: 10px;

-----------------------------

Dive into the "cascade" in Cascading Style Sheets. How does specificity determine which styles are applied to an element?

Antwort:

Die spezifität in CSS ist ein Konzept, welches festlegt, welche CSS-Regeln die auf das selbe Element zutreffen bevorzugt werden. 

reihenfolge nach spezifität:

1. Elementen Selektoren zb. button{}

2. Pseudoklassen und Pseudoelemente zb. (Pseudoklassen) ul:hover {}(Pseudoelemente) .navigation::after{}

3. Klassen selektoren zb. .container{}

4. Kombination von Klassen und Element Selektor zb. .container.p{}

5. Id-Selektoren zb. #primary-nav{}

6. !important übertrefft alle anderen Regeln

7. inline über trifft alles

----------------------

JavaScript
JavaScript brings interactivity to websites. From changing content on the fly to creating dynamic user interfaces, JavaScript is a powerful tool in a developer's arsenal.

Tasks:
Delve into the foundational syntax of JavaScript. How do concepts like variables, loops, and functions allow developers to create complex interactions?

Antwort:

variablen:

variablen können deklariert um Werte zu speichern.(var/let/const)

Datentypen(number, string, boolean, object, array)

Schleifen:

for Schleife(anweisungen oder block von anweisungen mehrmals ausführen)

for (let i = 0; i < 5; i++) {
    console.log(i); // Gibt 0, 1, 2, 3, 4 aus
}

while Schleife(wiederholt anweisung solange bedinung wahr ist)

let i = 0;
while (i < 5) {
    console.log(i); // Gibt 0, 1, 2, 3, 4 aus
    i++;
}

Funktionen:

funktionen deklarieren(Code zu organisieren und wieder verwenden)

function add(a, b){

    return a + b;

}

Funktionen aufrufen(aufrufen durch namen und gefolgten argumenten im klammer)

let sum = add(3, 4); // Ruft die "add"-Funktion auf und speichert das Ergebnis in "sum"
console.log(sum); // Gibt 7 aus

JavaScipt ermöglicht es entwicklern auf Elemente der Webseite zuzugreifen, Benutzer eingaben verarbeiten, Daten mit Servern auszutauschen und vieles mehr. Diese grundlegenden Konzepte bilden das Fundament für die Erstellung von interaktiven Webseiten und anspruchsvollen Webanwendungen. Sie können auch mit weiteren Konzepten wie bedingten Anweisungen, Objekten und Ereignisbehandlung kombiniert werden, um komplexe Funktionalität zu implementieren.

----------------------------------

Research the Document Object Model (DOM). How does JavaScript use the DOM to interact with web pages in real-time?

Antwort:

das DOM ist eine Programmierschnittstelle die es ermöglicht, durch JavaScript, in echtzeit mit dem Webrowser zu interagieren. 

Das DOM repräsentiert eine hierarchische Struktur von Objekten. 

Document ist das oberste Element im DOMbaum, welches den HTML-Dokument repräsentiert.

Zugriff auf DOM-Elemente

zugreifen durch verwendung von document-Objekt und Methoden wie getElementById, querySelector, querySelectorAll.

let myElement = document.getElementById('myElement');

Ändern von DOM Elementen:

Inhalt, Attribute und das Styling können geändert werden. 

myElement.innerHTML = 'Neuer Inhalt';
myElement.setAttribute('class', 'neueKlasse');
myElement.style.color = 'blue';

Ergebnisbehandlung:

JavaScript ermöglicht es Benutzer Interaktionen wie Clicks, Tastatur eingabe und Mausbewegungen zu reagieren. 

myElement.addEventListener('click', function() {
    alert('Element wurde angeklickt!');
});

Dynamische Erstellung und Löschung von Elementen

Man kann DOM-Elemente erstellen und bestehende DOM-Elemente löschen.

let newElement = document.createElement('div');
document.body.appendChild(newElement);

document.body.removeChild(newElement);

DOM-Manipulation für Animationen und Effekte

Das DOM kann für die Animationen und visuelle Effekte verwendet werden, in dem sie Eigenschaften, Style und Class dynamisch ändern. 

myElement.style.transition = 'all 0.5s';
myElement.style.transform = 'rotate(45deg)';

----------------------------

2. Exploring Bootstrap
   Bootstrap is a free, open-source CSS framework that contains pre-designed HTML, CSS, and JavaScript components. It's an invaluable tool for rapidly designing and customizing responsive mobile-first websites.

Tasks:
Dive into the history and purpose of Bootstrap. Why was it created, and how has it impacted modern web design?

Antwort:

Bootstrap wurde von den Entwicklern von Twitter(Mark Otto und Jacob Thornton entwickelt) als internes Tool entwickelt. Um die Entwicklung und Konsistenz zu steigern. Jedoch erlangte Bootstrap eine Weltweite beliebtheit durch seine Effizienz und Vielseitigkeit.

Entwicklungszweck:

- Konsistenz(Stile, Komponente mit einheitlichen erscheinungsbild die vorgefertigt sind)

- Effizienz(ermöglicht entwicklung von Schnellen Prototypen und beschleunigt Entwicklungszeit und senkt entwicklungskosten)

- Responsives Design(eines der ersten Frameworks die direkt auf Responsives design ausgelegt ist.)

- Erweitbarkeit(Entwickler können es für spezifische Anforderungen anpassen indem sie eigene Stile und Komponente hinzufügen oder vorhandene anpassen)

--------------------------------------

Explore the Bootstrap documentation. How can developers use its grid system, components, and utilities to streamline web development?

Antwort:

Einzelne Grid Systeme können aus der Dokumentation rauskopiert werden und ganz einfach verwendet werden. 

Bootstrap besitzt verschiedene Komponente, Entwickler können sie durch hinzufügen von HTML-Elemente und Klassen verwenden. 

Utilities umfassen verschiedene Anpassungsmöglichkeiten von HTML-Elementen

Mann kann diese auf die HTML über die class Attribut hinzufügen.

---------------------------------------------------

Understand the difference between using Bootstrap via a CDN (Content Delivery Network) and downloading its source files. What are the benefits and drawbacks of each approach?

Antwort:

Unterschied der zwei Methoden ist die Einbindung des Frameworks.

Vorteile von CDN:

- schnelle integration

- Schnelle Ladezeit

- neuster Stand

Nachteile:

- Abhängig von CDN(bei problemen von CDN funktioniert Seite auch nicht)

- Datenschutz und Sicherheit, Daten gehen an dritten

Vorteile von Quelldateien:

- Kontrolle, volle Kontrolle über anpassung und integration

- Unabhängigkeit, funktionier unabhängig von CDN

- Anpassungs möglichkeit in Bootstrap-Code

Nachteile:

- Grössere Dateigrösse(erhöhung Ladezeit)

- Wartungsaufwand(selbst darum kümmer das Dateien auf neustem Stand sind)

- höhere Zeitliche Aufwand als mit CDN

---------------------------

3. Integrating JavaScript into HTML
   Including JavaScript in an HTML document is crucial for creating dynamic web content. However, how and where you include it can significantly impact performance and user experience.

Tasks:
Learn the difference between linking an external JavaScript file and writing JavaScript directly within an HTML document. In what scenarios might one method be preferred over the other?

Antwort:

Der Unterschied zwischen den beiden Methoden liegt in der Art und Weise wie Javascript in eine Webseite integriert wird.

extern:

Trennung von Inhalt und Logik

Wiederverwendbarkeit für verschiedene HTML seiten. 

Caching, Zwischenspeichern von Browser um Ladezeit und wiederholte Seiten aufruf zu reduzieren. 

Zusätzlicher HTTP-Request dies kann Ladezeit erhöhen.

Abhängigkeit von externen Ressourcen

intern:

Keine zusätliche Request

Schnelle integration

Mengelnde trennung von Logik und Inhalt

Eingeschränkte wieder verwendbarkeit

Schlechtere Leistung bei caching

Wenn verwenden von Script auf mehrere Seiten dann extern.

Für kleine Scripte auf einzelne Seiten dann intern. 

-------------------------------

Understand the implications of placing <script> tags in different locations, like the <head> or before the closing </body> tag. How do the async and defer attributes modify script loading behavior?

Antwort:

Die platzierung des scripts-Tags hat auswirkungen auf das Verhalten des Skriptladens und auf die Darstellung. Die Verwendung der `async`- und `defer`-Attribute kann ebenfalls das Verhalten beim Laden von Skripten beeinflussen.

Unterschiede:

script im head:

scripte werden synchron geladen bevor die HTML grundgerüst geladen wird. 

Darstellung kann verzögert werden insbesonders wenn skript dateien gross sind und eine schlechte verbindung besteht.

Dies ist in der Regel die empfohlene Vorgehensweise, wenn das Skript die Initialisierung der Seite beeinflusst oder benötigt wird, bevor der Rest des Inhalts gerendert wird.

script vor dem schliessenden body tag:

Skripte werden asynchron ausgeführt. Sie wird mit dem laden des HTML dokuments gleichzeitig heruntergeladen werden. 

Dies ist in der Regel die empfohlene Vorgehensweise, wenn Skripte nicht benötigt werden, um die Seite zu initialisieren, und wenn sie unabhängig voneinander sind.

async Attribut:
bei hinzufügen von async Attribut bei script Tag werden die Dateien Asynchron geladen und ausgeführt das heisst, dass der Skript nicht darauf wartet das andere Skripte oder das HTML-Dokument heruntergeladen wird und in der Reihenfolge ausgeführt wie es verfügbar ist. 

defer Attribut:

es wird ebenfalls asynchron herunter geladen doch es wartet bis das HTML-Dokument heruntergeladen ist, bevor es ausgeführt wird. Die Reihenfolge der Ausführung entspricht der Reihenfolge im HTML-Dokument.

Die verwendung der zwei Attribute ist nützlich für die Optimierung von Laden und Leistung. 
