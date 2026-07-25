<?php

session_start();

include("conexion.php");


$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];


$sql = "SELECT * FROM usuario WHERE correo='$correo'";


$resultado = mysqli_query($conexion,$sql);


if(mysqli_num_rows($resultado)>0){


    $usuario = mysqli_fetch_assoc($resultado);


    if(password_verify($contraseña, $usuario['contraseña'])){


        $_SESSION['usuario'] = $usuario['usuario'];
        $_SESSION['correo'] = $usuario['correo'];


        header("Location: inicio.html");
        exit();


    }else{


        echo "Contraseña incorrecta";


    }


}else{


    echo "El usuario no existe";


}


mysqli_close($conexion);

?>