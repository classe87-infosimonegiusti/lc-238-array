const numeri = [];

//voglio generare 5 numeri casuali ed inserirli nell'array numeri
for (let i = 0; i < 5; i++) {

    let numeroCasuale = Math.floor(Math.random() * 90) + 1; // genero un numero casuale compreso tra 1 e 90
    numeri.push(numeroCasuale);

}

console.log(numeri);