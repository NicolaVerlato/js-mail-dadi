// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedere mail utente
const userMail = prompt('Dimmi la tua email');

// creazione lista mail
const mailList = ['giorgio@gmail.com', 'marco@gmail.com', 'filippo@gmail.com', 'silvia@gmail.com', 'sofia@gmail.com', 'mario@gmail.com']
let userEmailFounded = false;

// creazione ciclo per controllare indirizzi mail
for(let i = 0; i < mailList.length; i++) {

    // costante che indica un elemento dell'array
    const elementList = mailList[i];

    // controllare se la mail utente esiste nell'elenco degli elementi dell'array
    if(userMail === elementList) {
        userEmailFounded = true;
    }
}

// stampare il messaggio in pagina
if(userEmailFounded) {
    alert('Accesso riuscito');
} else {
    alert('Accesso negato');
}