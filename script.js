'use strict'

//let username = 'test';
//let password = '1234';


let mainDiv = document.getElementById('mainDiv');        

function authenticate() {

    /*  Det här är en central funktion som styr vilken vy som skall skapas.        
        
        Om user och password stämmer kallar den på createLogedInView.

        Om user och password inte stämmer kallar den på createErrorView.
        
        Om localStorage är tomt kallar funktionen på createMainView.
        Detta används när sidan laddas och inte användaren är inloggad.

        Logiken har tre tillstånd (states) som avgörs av vad som finns i localStorage.
        Om localStorage är tomt är användaren utloggad.
        Om localStorage innehåller rätt användarnamn och lösenord är användaren inloggad.
        Om något av användarnamn eller lösenord i localStorage är fel är inloggningen misslyckad.
    */ 
   
   fetch('users.json')
   .then(response => response.json())
   .then(json => {       
        console.log(json);
        for (let i = 0; i < json.length; i++) {
            if (localStorage.getItem('username') == json[i].user && localStorage.getItem('password') == json[i].password) {
                console.log('I am here!');
                localStorage.setItem('loggedInUser', '[]');

                let old_data = JSON.parse(localStorage.getItem('loggedInUser'));
                old_data.push(json[i]);

                localStorage.setItem('loggedInUser', JSON.stringify(old_data));
                
                createLoggedInView();
            }
        }
        
        // if (localStorage.length <= 0) {
        //     createMainView();
        // }
        // else {
        //     createErrorView();
        // }
    })
}

function createLoggedInView()  {

    /* Funktionen skapar vyn användaren kommer till när den har blivit inloggad.
       Det finns en knapp "Logga ut" som kallar på functionen createMainView.
       Denna knapp rensar också localStorage. 
    */   
    
    mainDiv.innerHTML = `<h4>Välkommen användare: ${localStorage.getItem('username')}!</h4>` +
                        '<p>Det här är din personliga sida.</p>' +
                        '<p>Den här texten visas bara om du är inloggad.<br>' +
                        '<br>' +                        
                        '<input type=\"button\" value=\"Logga ut\" id="loggoutButton">';

    document.getElementById('loggoutButton').addEventListener('click', function() {
        localStorage.clear();
        createMainView();
    });                        
}

function createErrorView() {

    /* Funktionen skapar den vy användaren kommer till om den har skrivit in fel lösenord.
       Det finns en knapp "Tillbaka" som kallar på funktionen createMainView så användaren kan
       göra ett nytt inloggningsförsök.
       Denna knapp rensar också localStorage. 
    */  

    mainDiv.innerHTML = '<h4>Fel inloggning!</h4>' +                       
                        '<input type=\"button\" value=\"Tillbaka\" id="backButton">';
    
    const backButton = document.getElementById('backButton');
    const usernameErrorText = `<p>Användaren ${localStorage.getItem('username')} är fel.`;
    const passwordErrorText = `<p>Lösenordet ${localStorage.getItem('password')} är fel.`;
    
    // Kontrollerar om användare och/eller lösenord är fel och skriver ut en hjälptext.
    if (localStorage.getItem('username') !== username) {
        backButton.insertAdjacentHTML('beforebegin', usernameErrorText);
    }

    if (localStorage.getItem('password') !== password) {
        backButton.insertAdjacentHTML('beforebegin', passwordErrorText);
    }

    document.getElementById('backButton').addEventListener('click', function() {
        console.log('I am in createErrorView');
        localStorage.clear();
        createMainView();
    }); 
}

function createMainView() {

    /* Denna funktion skapar den vy användaren kommer till om den inte är inloggad.
       Det finns två textrutor för användarnamn och lödenord samt en knapp för att logga in.
       Funktionen lagrar det som skrivits in i textrutorna i localStorage.
    */   

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
        authenticate();
    });
}

authenticate(); // Kallar på authenticate när sidan laddas om eller öppnas första gången.
    
