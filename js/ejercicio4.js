/* Declarar una variable y almacenar en ella un valor numerico
que representa el lado de un cuadrado. Calcule el area y el perimetro del cuadrado
y mostrar los resultados por consola
Area = 2 * lado
Perimetro = lado + lado + lado + lado */
const lado = 4;
const cal_area_cuadrado = (lado) => 2*lado ;
const cal_perimetro = (lado) => 4*lado ;
console.log('Calculo del area del cuadrado: ' + cal_area_cuadrado(lado));
console.log('Calculo del perimetro del cuadrado: ' + cal_perimetro(lado));