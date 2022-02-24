
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

        let number = i;
        // * stampare i numeri da 1 a 100
        // console.log(i);

        // * condizione per verificare se i è multiplo di 3 e se i è multiplo di 5
        if ( (number % 3 == 0) && (number % 5 == 0) ) { // ! se i diviso 3 dà resto 0 è multiplo di 3 e se i diviso 5 dà resto 0 è multiplo di 5

            console.log('FizzBuzz ' + number);

            // ! cambio il value del number in FizzBuzz
            number = 'FizzBuzz';

            // ? ho creato l'elemento tag LI per ogni numbero multipli di 3 e 5
            const newLi = document.createElement('li');
            newLi.innerText = number;
            newLi.classList.add('my-box');

            document.getElementById('my-list').append(newLi);
            

        } else if (number % 3 == 0) { // ! se i diviso 3 dà resto 0 è multiplo di 3

            console.log('Fizz ' + number);

            // ! cambio il value del number in Fizz
            number = 'Fizz';

            // ? ho creato l'elemento tag LI per ogni numbero multipli di 3 
            const newLi = document.createElement('li');
            newLi.innerText = number;
            newLi.classList.add('my-box');

            document.getElementById('my-list').append(newLi);

        } else if (number % 5 == 0) { // ! se i diviso 5 dà resto 0 è multiplo di 5

            console.log('Buzz ' + number);

            // ! cambio il value del number in Buzz
            number = 'Buzz';

            // ? ho creato l'elemento tag LI per ogni numbero multipli di 5
            const newLi = document.createElement('li');
            newLi.innerText = number;
            newLi.classList.add('my-box');

            document.getElementById('my-list').append(newLi);

        } else {

            console.log(number);

            // ? ho creato l'elemento tag LI per ogni numero
            const newLi = document.createElement('li');
            newLi.innerText = number;
            newLi.classList.add('my-box');

            document.getElementById('my-list').append(newLi);

        }

        // if ( (i % 3 == 0) && (i % 5 == 0) ) {

        //     console.log(i + ' FizzBuzz' + ' questo è un multiplo di 3 e 5!');
    
        // } 

    }
});



