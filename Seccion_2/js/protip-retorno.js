//function crearPersona(nombre, apellido) {
//    return {
//        nombre,
//        apellido
//    }
//}

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona( 'Diana', 'Borrajo');
console.log(persona);

function imprimeArgumnentos() {
    console.log(arguments);
}
const imprimeArgumnentos2 = (...arguments) => { console.log(arguments)};

imprimeArgumnentos2(10, true, false, 'Diana', 'Hallo');

const imprimeArgumnentos3 = (edad, ...arguments) => { 
//    console.log({edad}, arguments)
return arguments;
};

const [casado, vivo, nombre, saludo]=(10, true, false, 'Diana', 'Hallo');
console.log({casado, vivo, nombre, saludo});

const {apellido : nuevoApellido} = crearPersona ('Diana', 'Borrajo');
console.log({nuevoApellido});

let Tony = {
    nombre: 'Tony Start',
    codeName: 'Iroman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulbuster']
};
const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.trajes);
}
imprimePropiedades(Tony);
const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 25, trajes }) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades2(Tony);