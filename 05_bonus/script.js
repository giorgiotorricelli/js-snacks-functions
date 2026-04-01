'use strict';

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const myName = 'Mario';


// Dichiara la funzione qui.


function greetings(name){
    const time = Math.floor(Math.random() * 25).toFixed(2);
    let saluto = "";
    let result = "";

    if (time > 4 && time < 13) {
        saluto = "Buongiorno";
    } else if (time > 12 && time < 17) {
        saluto = "Buon pomeriggio";
    } else if (time > 16 && time < 22) {
        saluto = "Buona sera";
    } else {
        saluto = "Buona notte";
    }

    result = `${saluto} ${name}. (orario -> ${time})`;
    return result;
}

// Invoca la funzione qui e stampa il risultato in console

const risultato = greetings(myName);
console.log(risultato);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.