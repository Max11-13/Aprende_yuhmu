const preguntas = [
    {
        imagen: "gato.jpg",
        significado: "gato",
        opciones: ["perro", "gato", "pájaro"],
        correcta: "gato"
    },
    {
        imagen: "perro.jpg",
        significado: "perro",
        opciones: ["pez", "gato", "perro"],
        correcta: "perro"
    },
    {
        imagen: "ave.jpg",
        significado: "pájaro",
        opciones: ["pájaro", "pez", "perro"],
        correcta: "pájaro"
    },
    {
        imagen: "pez.jpg",
        significado: "pez",
        opciones: ["gato", "pez", "pájaro"],
        correcta: "pez"
    },
    {
        imagen: "gato.jpg",
        significado: "gato",
        opciones: ["pájaro", "perro", "gato"],
        correcta: "gato"
    }
];

let indice = 0;
let puntos = 0;

const imagen = document.getElementById("imagen-pregunta");
const opciones = document.getElementById("opciones");
const resultado = document.getElementById("resultado");
const progreso = document.getElementById("progreso");
const marcador = document.getElementById("puntos");
const continuar = document.getElementById("continuar");
const instruccion = document.getElementById("instruccion");

function mostrarPregunta() {
    const pregunta = preguntas[indice];

    progreso.textContent = `Pregunta ${indice + 1} de ${preguntas.length}`;
    marcador.textContent = `⭐ ${puntos} puntos`;
    imagen.src = pregunta.imagen;
    imagen.alt = pregunta.significado;
    opciones.innerHTML = "";
    resultado.textContent = "";
    continuar.hidden = true;
    instruccion.textContent = "¿Qué palabra corresponde a esta imagen?";

    pregunta.opciones.forEach(function(opcion) {
        const boton = document.createElement("button");
        boton.textContent = opcion;

        boton.addEventListener("click", function() {
            comprobarRespuesta(opcion);
        });

        opciones.appendChild(boton);
    });
}

function comprobarRespuesta(opcionElegida) {
    const pregunta = preguntas[indice];
    const botones = opciones.querySelectorAll("button");

    botones.forEach(function(boton) {
        boton.disabled = true;
    });

    if (opcionElegida === pregunta.correcta) {
        puntos++;
        resultado.textContent = "¡Correcto! 🎉";
    } else {
        resultado.textContent = "Casi. La respuesta correcta es: " + pregunta.correcta;
    }

    marcador.textContent = `⭐ ${puntos} puntos`;
    continuar.hidden = false;
}

continuar.addEventListener("click", function() {
    indice++;

    if (indice < preguntas.length) {
        mostrarPregunta();
    } else {
        imagen.hidden = true;
        opciones.innerHTML = "";
        progreso.textContent = "Actividad terminada";
        instruccion.textContent = "¡Terminaste la práctica!";
        resultado.textContent = `Obtuviste ${puntos} de ${preguntas.length} puntos.`;

        continuar.textContent = "Volver a empezar";
        continuar.hidden = false;

        continuar.onclick = function() {
            indice = 0;
            puntos = 0;
            imagen.hidden = false;
            continuar.textContent = "Siguiente pregunta →";
            continuar.onclick = null;
            mostrarPregunta();
        };
    }
});

mostrarPregunta();