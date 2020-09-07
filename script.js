'use strict'

function authenticate() {

    /*  Det här är en central funktion som styr vilken vy som skall skapas.
        Det är också denna funktion som kallas på när sidan ladas om.

        Funktionen kollar om user och password som finns lagrad i localStorage stämmer med det
        som är hårkodat i två variabler.
        Om det gör det kallar den på funktionen createLogedinView.

        Om user och password inte stämmer kallar den på createErrorView.
        
        Om localStorage är tomt kallar funktionen på createMainView.
        Detta används när sidan laddas och inte användaren är inloggad.

        Det här är en central funktion som styr vilken vy som skall skapas.
        Det är också denna funktion som kallas på när sidan ladas om.
    */
    // Om localStorage user and password = OK kalla på createLogedinview.

    // Om localStorage user eller password != OK kalla på creatErrorView.

    // Om localStorage är tomt kalla på createMainView.
    
}

function createLoggedinView()  {

    /* Funktionen skapar vyn användaren kommer till när den har blivit inloggad.
       Det finns en knapp "Logga ut" som kallar på functionen createMainView.
       Denna knapp rensar också localStorage. 
    */
    // Ändra mainDiv innerHTML.
    // <h4> med texten "Välkommen [skriv ut usernamnet från variabel] !"
    // <p> med texten "Det här är din personliga sida".
    // Lägg till en knapp längst ner med texten "Logga ut".
}

function createErrorView() {

    /* Funktionen skapar den vy användaren kommer till om den har knappat in fel lösenord.
       Det finns en knapp "Tillbaka" som kallar på funktionen createMainView så användaren kan
       göra ett nytt inloggningsförsök.
       Denna knapp rensar också localStorage. 
    */
    // Ändra mainDiv innerHTML.
    // <h4> med texten "Fel inloggning !"
    // Beroende på vad som är fel skriv ut en eller båda av:
    // <p> med texten "Användaren [skriv ut usernamnet från variabel] är fel."
    // <p> med texten "Användaren [skriv ut password från variabel] är fel."
    // Lägg till en knapp längst ner med texten "Tillbaka".
}

function createMainView() {

    /* Denna funktion skapar den vy användaren kommer till om den inte är inloggad.
       Det finns två textrutor för användarnamn och lödenord samt en knapp för att logga in.
       Funktionen lagrar det som skrivits in i textrutorna i localStorage. 

    */

    // Ändra mainDiv innerHTML.
    // <h4> med texten "Välkommen att logga in."
    // Skapa ett form.
    // Lägg till en input text med label "Användarnamn".
    // Lägg till en input text med label "Löenord".
    // Lägg till en knapp med texten "Logga in"
}
    
