'use strict';

/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterInitial(namesArray, filterChar){
    const filteredArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0].toLowerCase() === filterChar){
            filteredArray.push(namesArray[i]);
        }
    }
    return filteredArray;
}


// Invoca la funzione qui e stampa il risultato in console

const risultato = filterInitial(names, "a");
console.log(risultato);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]