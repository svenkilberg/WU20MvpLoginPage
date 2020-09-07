'use strict'

function authenticate() {

    // Om localStorage user and password = OK kalla på createLogedinview.

    // Om localStorage user eller password != OK kalla på creatErrorView.

    // Om localStorage är tomt kalla på createMainView.
    
}

function createLoggedinView()  {

    // Ändra mainDiv innerHTML.
    // <H4> med texten "Välkommen [skriv ut usernamnet från variabel] !"
    // <p> med texten "Det här är din personliga sida".
    // Lägg till en knapp längst ner med texten "Logga ut".
}

function createErrorView() {

    // Ändra mainDiv innerHTML.
    // <H4> med texten "Fel inloggning !"
    // Beroende på vad som är fel skriv ut en eller båda av:
    // <p> med texten "Användaren [skriv ut usernamnet från variabel] är fel."
    // <p> med texten "Användaren [skriv ut password från variabel] är fel."
    // Lägg till en knapp längst ner med texten "Tillbaka".
}
    
