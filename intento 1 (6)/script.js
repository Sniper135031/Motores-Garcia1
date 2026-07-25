// REGISTRAR USUARIO
function registrar() {

    let usuario = document.getElementById("usuario").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();

    if (usuario === "" || correo === "" || contraseña === "") {
        alert("Completa todos los campos.");
        return;
    }

    // Validar correo
    let expresion = /^[^\s@]+@[^\s@]+\.(com|mx|org|net|edu)$/i;

    if (!expresion.test(correo)) {
        alert("Ingresa un correo válido. Ejemplo: usuario@gmail.com");
        return;
    }

    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("correo", correo);
    localStorage.setItem("contraseña", contraseña);

    alert("Registro exitoso.");

    window.location.href = "index.html";
}


// INICIAR SESIÓN
function iniciarSesion() {

    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();

    let correoGuardado = localStorage.getItem("correo");
    let contraseñaGuardada = localStorage.getItem("contraseña");

    if (correo === "" || contraseña === "") {
        alert("Completa todos los campos.");
        return;
    }

    let expresion = /^[^\s@]+@[^\s@]+\.(com|mx|org|net|edu)$/i;

    if (!expresion.test(correo)) {
        alert("Ingresa un correo válido.");
        return;
    }

    if (correo === correoGuardado && contraseña === contraseñaGuardada) {

        alert("Bienvenido.");

        window.location.href = "inicio.html";

    } else {

        alert("Correo o contraseña incorrectos.");

    }

}
