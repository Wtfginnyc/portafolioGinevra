<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$basedatos = "portafolio_contacto";

$conn = new mysqli($servidor, $usuario, $contrasena, $basedatos);

if ($conn->connect_error) {
    echo "❌ Error al conectar con la base de datos.";
    exit();
}

$nombre = $conn->real_escape_string($_POST['nombre']);
$correo = $conn->real_escape_string($_POST['correo']);
$mensaje = $conn->real_escape_string($_POST['mensaje']);

$sql = "INSERT INTO mensajes (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo " Tu mensaje fue enviado exitosamente. ¡Gracias!";
} else {
    echo "Hubo un error al guardar tu mensaje.";
}

$conn->close();
?>