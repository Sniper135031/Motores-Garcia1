function diagnosticar() {

    let problema = document.getElementById("problema").value;
    let mensaje = "";

    if (problema == "motor") {
        mensaje = "⚠️ Recomendamos una revisión completa del motor y sistema eléctrico.";
    } 
    else if (problema == "ruido") {
        mensaje = "🔧 Recomendamos revisar suspensión, motor y piezas móviles.";
    } 
    else if (problema == "calentamiento") {
        mensaje = "🌡️ Recomendamos revisar radiador, anticongelante y sistema de enfriamiento.";
    } 
    else if (problema == "frenos") {
        mensaje = "🛑 Recomendamos revisar pastillas, discos y líquido de frenos.";
    } 
    else if (problema == "aceite") {
        mensaje = "🛢️ Recomendamos mantenimiento preventivo y cambio de aceite.";
    }

    document.getElementById("recomendacion").innerHTML =
    `
    <div class="confirmacion">
        <h3>Resultado del diagnóstico:</h3>
        <p>${mensaje}</p>
    </div>
    `;
}