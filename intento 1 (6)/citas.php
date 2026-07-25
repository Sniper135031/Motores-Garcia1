<?php

include("conexion.php");

$nombre = $_POST['nombre'];
$vehiculo = $_POST['vehiculo'];
$servicio = $_POST['servicio'];
$fecha = $_POST['fecha'];
$problema = $_POST['problema'];

$sql = "INSERT INTO citas (nombre, vehiculo, servicio, fecha, problema)
VALUES ('$nombre','$vehiculo','$servicio','$fecha','$problema')";

if (mysqli_query($conexion, $sql)) {

    header("Location: citas.html");

} else {

    echo "Error: " . mysqli_error($conexion);

}

?>