const opciones = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById('resultado');

opciones.forEach(opcion => {
  opcion.addEventListener('change', () => {
    resultado.textContent = `Lenguaje seleccionado: ${opcion.value}`;
    console.log(`Lenguaje seleccionado: ${opcion.value}`);
  });
});