

const boton1 = document.getElementById("btnJugar");

if (boton1) {
    boton1.addEventListener("click", function() {
        window.location.href = "jugar.html";
    });
}


const botonRepasar = document.getElementById("repasar");
const botonSiguiente = document.getElementById("siguiente");
const botonEscuchar = document.getElementById("escuchar");
const mensajeAudio = document.getElementById("mensaje-audio");

botonRepasar.addEventListener("click", function () {
    mensajeAudio.textContent =
        "Repasa la palabra y su significado antes de continuar.";
});

botonEscuchar.addEventListener("click", function () {
    mensajeAudio.textContent =
        "Aquí podrás escuchar la grabación verificada de la palabra.";
});


if (boton1) {
    botonSiguiente.addEventListener("click", function() {
         mensajeAudio.textContent =
        "¡Muy bien! Ahora puedes continuar con la práctica.";
        window.location.href = "jugar.html";
    });
}

botonSiguiente.addEventListener("click", function () {
    mensajeAudio.textContent =
        "¡Muy bien! Ahora puedes continuar con la práctica.";
           window.location.href = "nivel2.html";
});

const boton2 = document.getElementById("regresar");

if (boton2) {
    boton2.addEventListener("click", function() {
        window.location.href = "intex.html";
    });
}


