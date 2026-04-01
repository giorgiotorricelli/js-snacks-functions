'use strict';

/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelCounter(parola) {
    const vowels = ["a", "e", "i", "o", "u"];
    let risultato = [];
    let counter = 0;
    for (let i = 0; i < parola.length; i++) {
        if (vowels.includes(parola[i].toLowerCase())) {
            risultato.push(parola[i]);
            counter++;
        }
    }
    return `${counter} (${risultato.join(", ")})`;
}


// Invoca la funzione qui e stampa il risultato in console

const output = vowelCounter(word);
console.log(output);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)