const input = document.getElementById('input');
function imprimeValorInput() {
    console.log(input.value);
}

const seleccionClase = [...document.getElementsByClassName('clase')];

const seleccionQuery = document.querySelector('#input.clase');

//Crear elemento
let etiquetaImagen = document.createElement('img');

let divImagenes = document.getElementById('imagenes');
divImagenes.appendChild(etiquetaImagen);
let src = "https://www.elsoldemexico.com.mx/incoming/vgekij-perrito.jpg/ALTERNATES/LANDSCAPE_960/perrito.jpg";

etiquetaImagen.src = src;

let style = 'width: 50%;  filter: grayscale(100%);'

etiquetaImagen.style = style

//Eventos
let miBoton = document.getElementById('boton1');
function miFuncion(event) {
    // Con innerHTML
    divImagenes.innerHTML += `<img src ="${src}" style = "${style}" />`;
    /* miBoton = document.getElementById('boton1');
    miBoton.addEventListener('click', miFuncion) */;
}

miBoton.addEventListener('click', miFuncion);
