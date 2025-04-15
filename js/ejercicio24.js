const boton = document.getElementById('cambiarColor');

const colores = ['#f44336', '#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4'];

boton.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorSeleccionado = colores[indiceAleatorio];

    document.body.style.backgroundColor = colorSeleccionado;
    console.log(`Color de fondo cambiado a: ${colorSeleccionado}`);
});
