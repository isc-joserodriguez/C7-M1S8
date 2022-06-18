function imprimirNombre(nombre, opcion) {
    if (opcion === 'alert') {
        alert(nombre);
    }
    if (opcion === 'console') {
        console.log(nombre)
    }
}

imprimirNombre('María', 'alert');
imprimirNombre('Pedro', 'console');


function getNombreCompleto(nombre, apellido) {
    const nombreCompleto = nombre + ' ' + apellido;
    return nombreCompleto;
}

const miNombre = getNombreCompleto('Pedro', 'Guzmán');

console.log(miNombre);

function validarCampos(nombre, correo, contraseña) {
    //return nombre === '' && correo === '' && contraseña === '';
    if (nombre === '' || correo === '' || contraseña === '') {
        return true;
    } else {
        return false;
    }
}

function guardarUsuario(nombre, correo, contraseña) {
    if (validarCampos(nombre, correo, contraseña)) {
        alert('Oye, los tres campos son requeridos.')
    }
    console.log('Se guardó al usuario');
}

//! Obtener los registros de los usuarios ===> obtenerRegistrosUsuarios

guardarUsuario('', '', 'hola');
//guardarUsuario('Daniel', 'daniel@mail.com', 'Contra1234');



//!Temas pendientes.
//PascalCase

class FiguraGeometrica {
    constructor(altura, base, color) {
        this.altura = altura;
        this.base = base;
        this.color = color;
    }

    get getArea() {
        return this.calcularArea();
    }

    calcularArea() {
        return this.altura * this.base;
    }
}

const nuevaFigura = new FiguraGeometrica(10, 5, 'Azul');


// !Desestructuración de objetos y arreglos.

const obj = {
    altura: 10,
    base: 5,
    color: 'Azul',
    getArea: function (altura, base) {
        return altura * base;
    }
}

/* let altura = obj.altura;
let base = obj.base;
let color = obj.color;*/

let { base: nuevaBase, altura } = obj;


const arreglo = ['Pedro', 15, 'México'];

/* let nombre = arreglo[0];
let edad = arreglo[1];
let Pais = arreglo[2]; */

let [nombre, edad, pais] = arreglo;

/* function imprimeResumen(apellido, edad, nombre) {
    console.log('Tu nombre: ', nombre);
    console.log('Tu apellido: ', apellido);
    console.log('Tu edad: ', edad);
}

imprimeResumen('Jose', 'Martinez', 15); */

function imprimeResumen({ apellido, edad, nombre }) {
    console.log('Tu nombre: ', nombre);
    console.log('Tu apellido: ', apellido);
    console.log('Tu edad: ', edad);
}

imprimeResumen({
    nombre: 'Jose',
    apellido: 'Martinez',
    edad: 15,
});
