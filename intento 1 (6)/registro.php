<?php

include("conexion.php");

$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
$contrasena = $_POST['contraseña'];


// Encriptar contraseña
$contrasenaEncriptada = password_hash($contrasena, PASSWORD_DEFAULT);


$sql = "INSERT INTO usuario (usuario, correo, contraseña)
VALUES ('$usuario', '$correo', '$contrasenaEncriptada')";


if(mysqli_query($conexion,$sql)){

    header("Location: index.html");
    exit();

}else{

    echo "Error al registrar: ".mysqli_error($conexion);

}


mysqli_close($conexion);

?>