/* Calcular y mostrar por consola el area de un circulo cuyo radio es 7,5 */
const pi = 3.14;
let radio=7.5;
const cal_area = (radio) => pi*(radio**2) ;
console.log('Calculo del area: ' + cal_area(radio))