const regresaTrue = () => {
    console.log('Regresa True');
    return true;
} 

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
} 

console.warn('Not a la negación');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());


console.warn('And');
console.log(true && true); //true
console.log(true && false); //faslse
console.log(false && false); //false
console.log(true && !false); //true
console.log('ESTO REGRESA FALSE',false && false && false && false); //false

console.warn('========');
console.log(regresaFalse() && regresaTrue()); //false
console.log( regresaTrue() && regresaFalse() ); //false

console.warn('====&&====');
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.warn('====OR====');
console.log(true || true); //true
console.log(true || false); //faslse
console.log(false || false); //false
console.log(true || !false); //true
console.log(regresaFalse() || regresaTrue()); //TRUE
console.log( regresaTrue() || regresaFalse() ); //f
console.log('ESTO REGRESA TRUE', true || true || true || true); //true

console.warn('===Asignaciones====');

const soyUndefine = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefine || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalse || regresaTrue() || soyNull || 'Ya no soy falso de nuevo';

console.log({a1, a2, a3, a4, a5});

if (regresaFalse() || regresaTrue() && (true || true || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}