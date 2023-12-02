<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $nombre = $_POST["nombre"];
    $comentario = $_POST["mensaje"];

    // Conecta a la base de datos (ajusta los detalles de conexión según tu configuración)
    $conexion = new mysqli("localhost", "usuario", "contraseña", "nombre_de_la_base_de_datos");

    // Verifica la conexión
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    // Inserta el comentario en la base de datos
    $stmt = $conexion->prepare("INSERT INTO comentarios (nombre, comentario) VALUES (?, ?)");
    $stmt->bind_param("ss", $nombre, $comentario);

    if ($stmt->execute()) {
        // Redirige al usuario a la página de confirmación
        header("Location: confirmacion.html");
        exit();
    } else {
        echo "Error al guardar el comentario.";
    }

    // Cierra la conexión
    $stmt->close();
    $conexion->close();
}
?>
