/* 
- Creazione 2 array con numeri di elementi diversi
- Aggiungi elementi casuali finche l'array minore non raggiunge gli stessi elementi dell'altro
*/

// Creazione 2 ARRAY con numero elementi diversi
const firstArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20, 22, 33];
const secondArray = [2, 4, 6, 8, 10];

// Aggiungi elementi all'array piu' corto finche non raggiungono la stessa quantita'
while(secondArray.length < firstArray.length) {
    const addNumber = Math.floor(Math.random() * 10)

    secondArray.push(addNumber);
}