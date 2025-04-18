/*6. Crear un array denominado edades con al menos 8 edades distintas.
Recorrer el array y obtener el promedio de las edades del array*/

const edades = [19,21,22,23,25,30,33,35];

let suma = 0;

for (let i = 0; i < edades.length; i++) {
  suma += edades[i]; 
}

const promedio = suma / edades.length;

console.log("El promedio es: " + promedio);