/* Declarar dos variables denominadas horas, minutos, asignar valores a cada una 
y realizar la conversion para expresar esa horas y minutos en segundos.
Mostrar por consola las horas y minutos, luego el resultado de la conversion en segundos */
const horas = 20;
const minutos = 46;
const cal_seg = (h,m) => ((h*60)*60)+(m*60);
console.log('Son las ' + horas + ':' + minutos + ', y su equivalencia en segundos es: ' + cal_seg(horas,minutos));