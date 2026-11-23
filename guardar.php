
<?php

include("conexion.php");

$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$genero = $_POST["genero"];

$sql = "INSERT INTO usuarios (nombre, edad, genero)
        VALUES (?, ?, ?)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("sss", $nombre, $edad, $genero);

if ($stmt->execute()) {
    echo "¡Registro guardado correctamente!";
} else {
    echo "Error al guardar los datos: " . $stmt->error;
}

$stmt->close();
$conexion->close();

?>
