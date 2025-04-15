const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima"
};

const selectPais = document.getElementById('pais');
const selectCapital = document.getElementById('capital');

selectPais.addEventListener('change', () => {
    const paisSeleccionado = selectPais.value;

    if (paisSeleccionado) {
        const capital = paisesCapitales[paisSeleccionado];
        
        selectCapital.innerHTML = `<option value="${capital}">${capital}</option>`;
        selectCapital.disabled = false;

        console.log(`País seleccionado: ${paisSeleccionado}`);
        console.log(`Capital correspondiente: ${capital}`);
    } else {
        selectCapital.innerHTML = `<option value="">-- Capital --</option>`;
        selectCapital.disabled = true;
    }
});
