
/* 

TODO:   1) Stampare un consolo log "per adesso" i numeri da 1 a 100 OK
TODO:   2) fare un event listener con un bottone OK
TODO:   3) Creare un ciclo FOR OK
TODO:   4) Creare un condizione IF 
TODO:       -   se il numero x è multiplo di 3 (numbers % 3 == 0)
TODO:       -   fai questo (numbers = "Fizz") // solo se numbers è multiplo di 3
TODO:       -   altrimenti se x è multiplo di 5 (numbers % 5 == 0)
TODO:       -   fai questo (numbers = "Buzz") // solo se numbers è multiplo di 5
TODO:       -   altrimenti (numbers = "FizzBuzz")

*/

// * creiamo un bottone per eseguire l'event listener
const btn = document.getElementById('my-btn');

btn.addEventListener('click', function(){

    // * creiamo un ciclo For per stampare i numeri
    for (let i = 0; i <= 100; i++){

    // * stampare i numeri da 1 a 100
    // console.log(i);

    // * condizione per verificare se i è multiplo di 3 e se i è multiplo di 5
    if (i % 3 == 0) {
        console.log(i + ' Fizz' + ' questo è un multiplo di 3');
    } else if (i % 5 == 0) {
        console.log(i + ' Buzz' + ' questo è un multiplo di 5');
    } else{
        console.log(i + ' FizzBuzz' + ' questo non è multiplo di 3 e 5');
    }

    }
});

