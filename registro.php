
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - APRENDE YUHMU</title>
    <link rel="stylesheet" href="registro.css">
</head>

<body>

    <main class="contenedor">
        <section class="cuadro-registro">

            <div class="encabezado">
                <h1>¡Bienvenido!</h1>
                <p>APRENDE - YUHMU</p>
                <span>Conoce, aprende y conserva nuestra lengua.</span>
            </div>

            <div class="formulario">
                <h2>Registro de usuario</h2>

                <form action="guardar.php" method="POST">

                    <label for="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+"
                        placeholder="Escribe solo tu nombre"
                        required
                    >

                    <label for="edad">Edad:</label>
                    <input
                        type="number"
                        id="edad"
                        name="edad"
                        min="1"
                        max="120"
                        placeholder="Escribe tu edad"
                        required
                    >

                    <label for="genero">Género:</label>
                    <select id="genero" name="genero" required>
                        <option value="">Selecciona una opción</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    <button type="submit">REGISTRARME</button>

                </form>
            </div>

            <p class="pie">
                APRENDE-YUHMU | Preservando nuestra cultura
            </p>

        </section>
    </main>

</body>
</html>
