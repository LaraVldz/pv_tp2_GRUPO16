
const input = document.getElementById('Texto');
const output = document.getElementById('Salida');

input.addEventListener('input', () => {
    output.textContent = input.value;
});
