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


const contactoForm = document.getElementById('contacto-form');
const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputTelefono = document.getElementById('inputTelefono');
const bodyTabla = document.getElementById('body-tabla');
const contactos = [{
    nombre: 'Maria',
    apellido: 'Lopez',
    telefono: '1256432184',
},
{
    nombre: 'Maria',
    apellido: 'Lopez',
    telefono: '9923432184',
},
];


function agregarContacto(nombre, apellido, telefono) {
    contactos.push({
        nombre,
        apellido: apellido,
        telefono: telefono,
    })
}

function eliminarContacto(indice) {

    contactos.splice(indice, 1)
}

function mostrarContactos() {
    bodyTabla.innerHTML = '';
    contactos.forEach(function (contacto, indice) {
        bodyTabla.innerHTML += `<tr>
        <th scope="row">${indice + 1}</th>
        <td>${contacto.nombre}</td>
        <td>${contacto.apellido}</td>
        <td>${contacto.telefono}</td>
        <td>
        <button class="btn btn-warning" onclick="editarContacto(${indice})">editar</button>
        <button class="btn btn-danger">eliminar</button>        
        </td>
        </tr>`
    })
}

function editarContacto(indice) {
    contactos[indice].nombre = prompt('Ingresa un nuevo nombre.');
    contactos[indice].apellido = prompt('Ingresa un nuevo apellido.');
    contactos[indice].telefono = prompt('Ingresa un nuevo telefono.');

    mostrarContactos();
}


contactoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    /* 
    numero1 = numero1 + 123424123;
    numero1 += 123424123;
     */
    if (inputNombre.value.trim() !== '' && inputApellido.value.trim() !== '' && inputTelefono.value.trim() !== '') {

        bodyTabla.innerHTML = '';

        agregarContacto(inputNombre.value, inputApellido.value, inputTelefono.value);

        mostrarContactos();

        event.target.reset();
    } else {
        alert('Los 3 campos son obligatorios');
    }
});

mostrarContactos();