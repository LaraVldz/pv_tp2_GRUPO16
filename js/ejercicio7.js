/* 7. Declarar un array denominado nombres con al menos 6 nombres.
Obtener el nombre más largo del array nombres. 
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) 
que indica su tamaño.*/ 

const nombres = ["Lara", "Guadalupe", "Mauricio", "Darian", "Ignacio", "Teodoro"];

let nombre_mas_largo = nombres[0]; // Inicializamos con el primer nombre

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombre_mas_largo.length) {
        nombre_mas_largo = nombres[i];
    }
}

console.log("El nombre más largo es:", nombre_mas_largo);
console.log("Cantidad de letras:" + nombre_mas_largo.length);