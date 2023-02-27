const numeri = [2,3,45,74,13,22,89,86,15];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 == 0) { //pari -- per il dispari potrei scrivere if (numeri[i] % 2 !== 0) {
        console.log(numeri[i]);
    }
}