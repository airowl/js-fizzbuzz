
/* 

TODO:   1) Stampare un consolo log "per adesso" i numeri da 1 a 100 
TODO:   2) fare un event listener con un bottone OK
TODO:   3) Creare un ciclo FOR OK
TODO:   4) Creare un condizione IF 
TODO:       -   se il numero x è multiplo di 3 (numbers % 3 == 0)
TODO:       -   fai questo (numbers = "Fizz") // solo se numbers è multiplo di 3
TODO:       -   altrimenti se x è multiplo di 5 (numbers % 5 == 0)
TODO:       -   fai questo (numbers = "Buzz") // solo se numbers è multiplo di 5

*/

// * creiamo un bottone per eseguire l'event listener
const btn = document.getElementById('my-btn');

btn.addEventListener('click', function(){

    // * creiamo un ciclo For per stampare i numeri
    for (let i = 0; i < 100; i++){

    // * stampare i numeri da 1 a 100
    console.log(i);

    }
});

