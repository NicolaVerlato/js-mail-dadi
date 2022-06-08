// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// chiedere un numero tra 1 e 6 all'utente
const userNumber = (Math.floor(Math.random() * 7));
const userText = document.getElementById('user-number'); 
userText.innerHTML = 'Il tuo numero è: ' + userNumber;

// generare un numero
const pcNumber = (Math.floor(Math.random() * 7));
const pcText = document.getElementById('pc-number');
pcText.innerHTML = 'Il mio numero è: ' + pcNumber;

// stabilire se il numero di userNumber è più alto del pcNumber
let risultato = document.getElementById('risultato');
let winner = 'Hai perso!';
if(userNumber > pcNumber) {
    // se è più alto
    winner = 'Hai vinto!';
} else if (userNumber === pcNumber){
    // se è uguale
    winner = 'Hai pareggiato!';
}

//  risultato stampato in pagina
risultato.innerHTML = winner;