

const audio1 = document.getElementById("Afruta1");
const audio2 = document.getElementById("Afruta2");
const audio3 = document.getElementById("Afruta3");
const audio4 = document.getElementById("Afruta4");
const audio5 = document.getElementById("Afruta5");


const audios = [audio1, audio2, audio3, audio4, audio5];


/* VARIABLES */

let pregunta = 1;
let respuestaSeleccionada = false;
const volverJugar = document.getElementById("volverJugar");

const mensaje = document.getElementById("mensaje");
const siguiente = document.getElementById("siguiente");
const contador = document.getElementById("contador");
const escuchar = document.getElementById("escuchar");




escuchar.addEventListener("click", function() {

    // Detener cualquier audio anterior
    audios.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });

    // Reproducir el audio de la pregunta actual
    audios[pregunta - 1].play();

});




document.getElementById("respuesta1").addEventListener("click", function() {
    respuestaSeleccionada = true;
    if (pregunta === 4) {
        mensaje.textContent = "¡Correcto! 🎉";
    } else {
        mensaje.textContent = "Inténtalo nuevamente";
    }
});

document.getElementById("respuesta2").addEventListener("click", function() {
    respuestaSeleccionada = true;
    if (pregunta === 2) {
        mensaje.textContent = "¡Correcto! 🎉";
    } else {
        mensaje.textContent = "Inténtalo nuevamente";
    }
});

document.getElementById("respuesta3").addEventListener("click", function() {
    respuestaSeleccionada = true;
    if (pregunta === 5) {
        mensaje.textContent = "¡Correcto! 🎉";
    } else {
        mensaje.textContent = "Inténtalo nuevamente";
    }
});

document.getElementById("respuesta4").addEventListener("click", function() {
    respuestaSeleccionada = true;
    if (pregunta === 3) {
        mensaje.textContent = "¡Correcto! 🎉";
    } else {
        mensaje.textContent = "Inténtalo nuevamente";
    }
});

document.getElementById("respuesta5").addEventListener("click", function() {
    respuestaSeleccionada = true;
    if (pregunta === 1) {
        mensaje.textContent = "¡Correcto! 🎉";
    } else {
        mensaje.textContent = "Inténtalo nuevamente";
    }
});






contador.textContent = "Pregunta 1 de 5";

siguiente.addEventListener("click", function() {

    // Verificar si seleccionó una respuesta
    if (respuestaSeleccionada === false) {
        mensaje.textContent = "Primero selecciona una respuesta";
        return;
    }

    // Detener el audio actual
    audios.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });

    if (pregunta < 5) {

        pregunta = pregunta + 1;

        respuestaSeleccionada = false;

        mensaje.textContent = "Presiona el botón para escuchar la palabra.";

        contador.textContent = "Pregunta " + pregunta + " de 5";

    }  else {

    mensaje.textContent = "";

    siguiente.disabled = true;
    escuchar.disabled = true;

    volverJugar.style.display = "block";

}


volverJugar.addEventListener("click", function() {

    
    pregunta = 1;

    
    respuestaSeleccionada = false;

    // Detener los audios
    audios.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });

  
    mensaje.textContent = "";

    
    contador.textContent = "Pregunta 1 de 5";

    // Activar botones
    siguiente.disabled = false;
    escuchar.disabled = false;

    
    volverJugar.style.display = "none";

});

const botonAtras = document.getElementById("atras");

botonAtras.addEventListener("click", function() {
    window.location.href = "nivel4.html";
});

});