// ================================
// MENSAJE DE BIENVENIDA
// ================================

window.addEventListener("load", function () {

    alert("🚗 ¡Bienvenido a la sección de servicios de Motores García!");

});

// ================================
// EFECTO EN LOS BOTONES
// ================================

const botones = document.querySelectorAll(".tarjeta button");

botones.forEach(boton => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "scale(1.08)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

});

// ================================
// CONTADOR ANIMADO
// ================================

let numero = 0;

const contador = document.getElementById("autos");

function animarContador(){

    if(numero < 1500){

        numero += 15;

        contador.textContent = numero + "+";

        setTimeout(animarContador,15);

    }

}

animarContador();

// ================================
// MENSAJE AL SOLICITAR SERVICIO
// ================================

botones.forEach(boton => {

    boton.addEventListener("click", function(){

        alert("✅ Serás enviado al apartado para agendar tu cita.");

    });

});