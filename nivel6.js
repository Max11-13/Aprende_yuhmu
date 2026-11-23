
const botonJugar = document.getElementById("jugar");

botonJugar.addEventListener("click", function() {
    window.location.href = "juego6.html";
});

document.getElementById("jugar").style.display = "inline-block";




const botonatras = document.getElementById("atras");

botonatras.addEventListener("click", function() {
    window.location.href = "mapa.html";
});


const botonAudio = document.getElementById("boton1");
const audio = document.getElementById("audio1");

botonAudio.addEventListener("click", function() {

   if (!audio.paused) {
        return;
    }

    audio.play();
});



const botonAudio2 = document.getElementById("boton2");
const audio2 = document.getElementById("audio2");

botonAudio2.addEventListener("click", function() {
      if (!audio2.paused) {
        return;
    }

    audio2.play();
});


const botonAudio3 = document.getElementById("boton3");
const audio3 = document.getElementById("audio3");

botonAudio3.addEventListener("click", function() {
    if (!audio3.paused) {
        return;
    }

    audio3.play();
});



const botonAudio4 = document.getElementById("boton4");
const audio4 = document.getElementById("audio4");

botonAudio4.addEventListener("click", function() {
    if (!audio4.paused) {
        return;
    }

    audio4.play();
});


const botonAudio5 = document.getElementById("boton5");
const audio5 = document.getElementById("audio5");

botonAudio5.addEventListener("click", function() {
    if (!audio5.paused) {
        return;
    }

    audio5.play();
});

const nivel1 = document.getElementById("nivel1");
const nivel2 = document.getElementById("nivel2");

const siguiente = document.getElementById("btnSiguiente");
const anterior = document.getElementById("btnAnterior");


siguiente.addEventListener("click", function() {


    nivel1.style.display = "none";
    nivel2.style.display = "flex";

    siguiente.style.display = "none";
    anterior.style.display = "block";

    
});


anterior.addEventListener("click", function() {

    nivel1.style.display = "flex";
    nivel2.style.display = "none";

    siguiente.style.display = "block";
    anterior.style.display = "none";

});






