/*  
- Chiedere 5 volte un numero all'utente
- Stampa la somma di tutti i numeri inseriti
- Eseguire in FOR e WHILE
*/

// **** CICLO FOR *****
// Chiedere 5 volte numeri all'utente 
let sum = 0;
for( let i = 0; i < 5; i++) {
    const userNumber = parseInt( prompt('Inserisci un numero') );

    // Somma dei numeri inseriti dall'utente
    sum += userNumber;
}


// ******* CICLO WHILE  *********
// Chiedere 5 volte numeri all'utente 
let i = 0; 
while(i < 5) {
    const userNumber = parseInt( prompt('Inserisci un numero') );

    // Somma dei numeri inseriti dall'utente
    sum += userNumber;

    i++
}

// Stampa la somma totale 
const userMessage = `<span>${sum}</span>`;
document.getElementById('sum-results').innerHTML = userMessage;

