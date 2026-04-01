'use strict';

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function greeting(name) {
    return `Ciao ${name}`;
}

//const greeting2 = nome => `Ciao ${nome}`;


// Invoca la funzione qui e stampa il risultato in console

const risultato = greeting(userName);
console.log(risultato);



//Risultato atteso se si passa 'Mario': // ciao Mario
