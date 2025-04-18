/* Mostrar por consola los primeros 10 números pares */
let pares = [];
let i = 0;
let num = 1;
do {
    if(num % 2 === 0){
        i++;
        pares.push(num);
    }
    num++;
} while (i<10);
pares.forEach((n,index ) => {
    console.log("Numero " + (index + 1) + ": ",n);
});
