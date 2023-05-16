let name = prompt ('Inserisci il tuo nome');

let surname = prompt ('Inserisci il tuo cognome');

let colour = prompt ('Inserisci il tuo colore preferito');

const number = '21';

let password_utente = `${name}${surname}${colour}${number}`;

document.getElementById('password_utente').innerHTML = password_utente;