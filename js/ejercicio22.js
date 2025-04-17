const inputTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {
    const valor = inputTexto.value;
    resultado.textContent = valor;

    if (valor.length > 20) {
        resultado.style.backgroundColor = "#ffcccc";
    } else {
        resultado.style.backgroundColor = "#f2f2f2";
    }
});
