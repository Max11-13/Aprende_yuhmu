
/* BOTÓN PARA IR AL JUEGO */

const botonJugar = document.getElementById("Jugar");

botonJugar.addEventListener("click", function() {
    window.location.href = "juego1.html";
});


const botonAtras = document.getElementById("atras");

botonAtras.addEventListener("click", function() {
    window.location.href = "mapa.html";
});


/*boton 1  pronunciacion*/

const botonAudio = document.getElementById("boton1");
const audio = document.getElementById("audio1");

botonAudio.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.play();
});

/*boton 2  pronunciacion*/

const botonAudio2 = document.getElementById("boton2");
const audio2 = document.getElementById("audio2");

botonAudio2.addEventListener("click", function() {
    audio2.currentTime = 0;
    audio2.play();
});

/*boton 3  pronunciacion*/

const botonAudio3 = document.getElementById("boton3");
const audio3 = document.getElementById("audio3");

botonAudio3.addEventListener("click", function() {
    audio3.currentTime = 0;
    audio3.play();
});



const nivel1 = document.getElementById("nivel1");
const nivel2 = document.getElementById("nivel2");

const siguiente = document.getElementById("btnSiguiente");
const anterior = document.getElementById("btnAnterior");

// Pasar al nivel 2
siguiente.addEventListener("click", function() {


    nivel1.style.display = "none";
    nivel2.style.display = "flex";

    siguiente.style.display = "none";
    anterior.style.display = "block";

    
});

// Regresar al nivel 1
anterior.addEventListener("click", function() {

    nivel1.style.display = "flex";
    nivel2.style.display = "none";

    siguiente.style.display = "block";
    anterior.style.display = "none";

});

