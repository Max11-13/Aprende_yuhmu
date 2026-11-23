<?php

$conexion = new mysqli(
    "localhost",
    "root",
    "A03_Pro_2002",
    "Yuhmu",
    3306
);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

echo "¡Conexión exitosa con MySQL!";

$conexion->set_charset("utf8mb4");

?>