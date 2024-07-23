
document.addEventListener('DOMContentLoaded', function () {
    updateValorHora();
});

function updateValorHora() {
    const categoria = document.getElementById('categoria');
    const valorHora = categoria.options[categoria.selectedIndex].getAttribute('data-valor');
    document.getElementById('valorHora').value = valorHora;
    calculateRemunerativo();
}

function calculateRemunerativo() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const horasNormales = parseFloat(document.getElementById('horasNormales').value) || 0;
    const horas50 = parseFloat(document.getElementById('horas50').value) || 0;
    const horas100 = parseFloat(document.getElementById('horas100').value) || 0;

    const remunerativoHorasNormales = valorHora * horasNormales;
    const remunerativoHoras50 = valorHora * horas50 * 1.5;
    const remunerativoHoras100 = valorHora * horas100 * 2;

    document.getElementById('remunerativoHorasNormales').textContent = remunerativoHorasNormales.toFixed(2);
    document.getElementById('remunerativoHoras50').textContent = remunerativoHoras50.toFixed(2);
    document.getElementById('remunerativoHoras100').textContent = remunerativoHoras100.toFixed(2);

    const subtotalRemunerativo = remunerativoHorasNormales + remunerativoHoras50 + remunerativoHoras100;
    document.getElementById('subtotalRemunerativo').textContent = subtotalRemunerativo.toFixed(2);

    calculateTotal();
}

function calculateDescuento() {
    const subtotalRemunerativo = parseFloat(document.getElementById('subtotalRemunerativo').textContent) || 0;
    const jubilacion = parseFloat(document.getElementById('jubilacion').value) || 0;
    const obraSocial = parseFloat(document.getElementById('obraSocial').value) || 0;
    const ley23032 = parseFloat(document.getElementById('ley23032').value) || 0;

    const descuentoJubilacion = subtotalRemunerativo * (jubilacion / 100);
    const descuentoObraSocial = subtotalRemunerativo * (obraSocial / 100);
    const descuentoLey23032 = subtotalRemunerativo * (ley23032 / 100);

    document.getElementById('descuentoJubilacion').textContent = descuentoJubilacion.toFixed(2);
    document.getElementById('descuentoObraSocial').textContent = descuentoObraSocial.toFixed(2);
    document.getElementById('descuentoLey23032').textContent = descuentoLey23032.toFixed(2);

    const subtotalDescuento = descuentoJubilacion + descuentoObraSocial + descuentoLey23032;
    document.getElementById('subtotalDescuento').textContent = subtotalDescuento.toFixed(2);

    calculateTotal();
}

function calculateNoRemunerativo() {
    const asignacionFamiliar = parseFloat(document.getElementById('asignacionFamiliar').value) || 0;
    document.getElementById('noRemunerativoAsignacion').textContent = asignacionFamiliar.toFixed(2);
    document.getElementById('subtotalNoRemunerativo').textContent = asignacionFamiliar.toFixed(2);

    calculateTotal();
}

function calculateTotal() {
    const subtotalRemunerativo = parseFloat(document.getElementById('subtotalRemunerativo').textContent) || 0;
    const subtotalDescuento = parseFloat(document.getElementById('subtotalDescuento').textContent) || 0;
    const subtotalNoRemunerativo = parseFloat(document.getElementById('subtotalNoRemunerativo').textContent) || 0;

    const totalPercibir = subtotalRemunerativo - subtotalDescuento + subtotalNoRemunerativo;
    document.getElementById('totalPercibir').textContent = totalPercibir.toFixed(2);
}