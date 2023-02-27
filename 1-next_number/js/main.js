
let numeroCorrente = parseInt(prompt('Inserisci un numero'));
console.log(numeroCorrente);

// Equivalente di const numeroSeguente = ++numeroCorrente;
numeroCorrente = numeroCorrente + 1;
const numeroSeguente1 = numeroCorrente;

// Equivalente a const numeroSeguente = numeroCorrente++;
const numeroSeguente2 = numeroCorrente; 
numeroCorrente = numeroCorrente + 1;

