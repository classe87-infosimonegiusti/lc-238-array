const studenti =['Alice', 'Mario', 'Giovanni', 'Barbara'];

const indice = parseInt(prompt(`Inserisci un numero che rappresenti la posizione dell'indice nell'array degli studenti. Sono ammessi numeri tra 0 e ${studenti.length - 1}`));

if (indice >= studenti.length ) {
    console.log(`Il numero massimo che puoi inserire è ${studenti.length - 1}`);
} else if (indice < 0) {
    console.log("Il numero minimo che puoi inserire è 0");
} else if (isNaN(indice)) {
    console.log("Devi inserire un numero!");
} else {
    console.log(`Lo studente alla posizione dell'indice ${indice} è: ${studenti[indice]}`);
}
