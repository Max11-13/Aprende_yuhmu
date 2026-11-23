

const animales = [
    { id: "gato", palabra: "Nugagá thŏthó dipagamé ya hmé nu'í ", imagen: "imagen/tor.jpg", alt: "Un gato" },
    { id: "perro", palabra: "Nge ra šúa šambíni diphití ra phìi", imagen: "imagen/som.jpg", alt: "Un perro" },
    { id: "pajaro", palabra: "Nge kaua ngamixa na potsi", imagen: "imagen/cam.jpg", alt: "Un pájaro" },

];

const tablero = document.getElementById("tablero");
const marcadorMovimientos = document.getElementById("movimientos");
const marcadorParejas = document.getElementById("parejas");
const estado = document.getElementById("estado-juego");
const botonReiniciar = document.getElementById("reiniciar");

let primeraCarta = null;
let bloqueado = false;
let movimientos = 0;
let parejasEncontradas = 0;
let temporizador = null;

function mezclar(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
}

function crearContenido(animal, tipo) {
    const contenido = document.createElement("span");
    contenido.className = "contenido-carta";

    if (tipo === "imagen") {
        const imagen = document.createElement("img");
        imagen.src = animal.imagen;
        imagen.alt = animal.alt;
        contenido.appendChild(imagen);
    } else {
        const palabra = document.createElement("span");
        palabra.textContent = animal.palabra;
        contenido.appendChild(palabra);
    }

    return contenido;
}

function voltear(carta) {
    if (bloqueado || carta.disabled || carta === primeraCarta) return;

    carta.classList.add("volteada");
    carta.setAttribute("aria-label", carta.dataset.etiqueta);
    carta.replaceChildren(crearContenido(
        animales.find((animal) => animal.id === carta.dataset.animal),
        carta.dataset.tipo
    ));

    if (!primeraCarta) {
        primeraCarta = carta;
        return;
    }

    movimientos++;
    marcadorMovimientos.textContent = movimientos;
    bloqueado = true;

    if (primeraCarta.dataset.animal === carta.dataset.animal) {
        primeraCarta.classList.add("encontrada");
        carta.classList.add("encontrada");
        primeraCarta.disabled = true;
        carta.disabled = true;
        parejasEncontradas++;
        marcadorParejas.textContent = parejasEncontradas;
        estado.textContent = parejasEncontradas === animales.length
            ? `¡Ganaste! Encontraste las 4 parejas en ${movimientos} movimientos.`
            : "¡Pareja encontrada! Sigue buscando.";
        primeraCarta = null;
        bloqueado = false;
        return;
    }

    estado.textContent = "No coinciden. Intenta recordar dónde están las cartas.";
    temporizador = window.setTimeout(() => {
        ocultarCarta(primeraCarta);
        ocultarCarta(carta);
        primeraCarta = null;
        bloqueado = false;
        temporizador = null;
    }, 850);
}

function ocultarCarta(carta) {
    carta.classList.remove("volteada");
    carta.setAttribute("aria-label", "Carta oculta");
    carta.replaceChildren(document.createTextNode("¿?"));
}

function iniciarJuego() {
    if (temporizador !== null) {
        window.clearTimeout(temporizador);
        temporizador = null;
    }

    primeraCarta = null;
    bloqueado = false;
    movimientos = 0;
    parejasEncontradas = 0;
    marcadorMovimientos.textContent = "0";
    marcadorParejas.textContent = "0";
    estado.textContent = "Voltea dos cartas para encontrar una pareja.";
    tablero.replaceChildren();

    const cartas = animales.flatMap((animal) => [
        { animal, tipo: "imagen", etiqueta: `Imagen: ${animal.palabra}` },
        { animal, tipo: "palabra", etiqueta: `Palabra: ${animal.palabra}` }
    ]);

    mezclar(cartas).forEach(({ animal, tipo, etiqueta }) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "carta-memorama";
        boton.textContent = "¿?";
        boton.dataset.animal = animal.id;
        boton.dataset.tipo = tipo;
        boton.dataset.etiqueta = etiqueta;
        boton.setAttribute("aria-label", "Carta oculta");
        boton.addEventListener("click", () => voltear(boton));
        tablero.appendChild(boton);
    });
}

botonReiniciar.addEventListener("click", iniciarJuego);
iniciarJuego();



const botonAtras = document.getElementById("juego");

botonAtras.addEventListener("click", function() {
    window.location.href = "nivel6.html";
});