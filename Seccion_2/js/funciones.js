function saludar(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;
}
saludar('Diana', 45, 'Berlin', 'Fullstack');
const retornoSaludar = saludar('Diana', 45, 'Berlin', 'Fullstack');
console.log(retornoSaludar);

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}
saludar2('Pompy y Tui');

const saludarFlecha = () => {console.log('Hola flecha')}

const saludarFlecha2 = (nombre) => {console.log('Hola ' + nombre)} 

 saludarFlecha();

 saludarFlecha2('Pelusa')

 function sumar(a, b) {
    return a + b;
 }
 const sumar2 = (a, b) => {}
 console.log(sumar(1,2))

 function getAleatorio() {
    return Math.random();
 }
 const getAleatorio2 = () => Math.random();
 console.log(getAleatorio2());