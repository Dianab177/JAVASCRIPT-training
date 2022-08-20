const elMayor = (a, b) => ( a > b ) ? a : b;
// console.log(elMayor(10, 15));
const tieneMembresia = ( mienbro ) => (mienbro) ? '2 Dólares' : '10 Dólares';
//console.log(tieneMembresia(false));
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=>'Nick Fury')()
];
console.log(amigosArr);

const nota = 82.5;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';
              
console.log({nota, grado});
