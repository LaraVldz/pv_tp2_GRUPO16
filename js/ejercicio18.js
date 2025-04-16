/*18. Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css.
Crear un script que capture el evento clic del botón y que cambie el texto del párrafo 
por otro.*/ 

document.addEventListener("DOMContentLoaded", () => {
    const parrafo = document.querySelector(".parrafo18");
    const boton = document.querySelector(".boton18");

    const cambiarTexto = () => {
        parrafo.textContent = "¡Se cambió el texto!";
        parrafo.style.fontWeight = "bold";
    };

    boton.addEventListener("click", cambiarTexto);
});

export function init() {
    
}


