'use strict'

let username = 'test';
let password = '1234';
let mainDiv = document.getElementById('mainDiv');

function authenticate() {

    /*  Det här är en central funktion som styr vilken vy som skall skapas.
        Det är också denna funktion som kallas på när sidan ladas om.

        Funktionen kollar om user och password som finns lagrad i localStorage stämmer med det
        som är hårdkodat i två variabler.
        Om det gör det kallar den på funktionen createLogedinView.

        Om user och password inte stämmer kallar den på createErrorView.
        
        Om localStorage är tomt kallar funktionen på createMainView.
        Detta används när sidan laddas och inte användaren är inloggad.
    */
    // Om localStorage user and password = OK kalla på createLogedinview.

    // Om localStorage user eller password != OK kalla på creatErrorView.

    // Om localStorage är tomt kalla på createMainView.   

    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
        createLoggedInView();
    }
    else if (localStorage.length <= 0) {
        createMainView();
    }
    else {
        createErrorView();
    }
}

function createLoggedInView()  {

    /* Funktionen skapar vyn användaren kommer till när den har blivit inloggad.
       Det finns en knapp "Logga ut" som kallar på functionen createMainView.
       Denna knapp rensar också localStorage. 
    */
    // Ändra mainDiv innerHTML.
    // <h4> med texten "Välkommen [skriv ut usernamnet från variabel] !"
    // <p> med texten "Det här är din personliga sida".
    // Lägg till en knapp längst ner med texten "Logga ut".
    
    mainDiv.innerHTML = `<h4>Välkommen användare: ${localStorage.getItem('username')}!</h4>` +
                        '<p>Det här är din personliga sida.</p>' +
                        '<p>Den här texten visas bara om du är inloggad.<br>' +
                        '<br>' +                        
                        '<input type=\"button\" value=\"Logga ut\" id="loggoutButton">';

    document.getElementById('loggoutButton').addEventListener('click', function() {
        localStorage.clear();
        createMainView()
    });
                        
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
    // <p> med texten "Lösenordet [skriv ut password från variabel] är fel."
    // Lägg till en knapp längst ner med texten "Tillbaka".

    

    mainDiv.innerHTML = '<h4>Fel inloggning!</h4>' +                       
                        '<input type=\"button\" value=\"Tillbaka\" id="backButton">';
    
    const backButton = document.getElementById('backButton');
    const usernameErrorText = `<p>Användaren ${localStorage.getItem('username')} är fel.`;
    const passwordErrorText = `<p>Lösenordet ${localStorage.getItem('password')} är fel.`;
    
    if (localStorage.getItem('username') !== username) {
        backButton.insertAdjacentHTML('beforebegin', usernameErrorText);
    }

    if (localStorage.getItem('password') !== password) {
        backButton.insertAdjacentHTML('beforebegin', passwordErrorText);
    }

    document.getElementById('backButton').addEventListener('click', function() {
        localStorage.clear();
        createMainView();
    }); 
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

    mainDiv.innerHTML = '<h4>Välkommen att logga in.</h4>' + 
                        '<form id=\"logginForm\">' +
                        '<label for=\"userInput\">Användarnamn:</label>' +
                        '<input type=\"text\" id=\"userInput\">' +
                        '<label for=\"passwordInput\">Lösenord:</label>' +
                        '<input type=\"text\" id=\"passwordInput\"></input>' +
                        '<input type=\"button\" value=\"Logga in\" id="logginButton">' +
                        '</form>';

    let userInput = document.getElementById('userInput');
    let passwordInput = document.getElementById('passwordInput');
    let logginButton = document.getElementById('logginButton');
        
    logginButton.addEventListener('click', function() {
        localStorage.setItem('username', userInput.value);
        localStorage.setItem('password', passwordInput.value);
        console.log(localStorage);
        authenticate();

    });
    
    

}

authenticate();
    
