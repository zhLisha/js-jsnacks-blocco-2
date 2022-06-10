/* 
- Chiedere all'utente dei numeri da inesrire nell'array
- Continuare finche' la somma di tutti i numeri e' inferiore a 50.
*/

// Creazione Array numeri utente
const userNumbersArray = []; 

let sum = 0; 

while(sum < 50){

    // Chiedere il numero 
    const userNumber = parseInt( prompt('Dammi un numero inferiore a 50') );

    // Addizione dei numeri 
    sum += userNumber;

    console.log(sum);

    // Inserimento numero in Array
    if(sum <= 50){
        userNumbersArray.push(userNumber);
    }
}