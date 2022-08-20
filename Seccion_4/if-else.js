let a = 5;

if (a > 10) {
    console.log('A es mayor a 10');
}
if (a < 10) {
    console.log('A es menor a 10');
}
if (a >= 10) {
    console.log('A es mayor o igual a 10');
}
//console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
//console.log(dia);
if (dia === 0) {
   // console.log('Domingo');
} else if( dia === 1) {
   //console.log('Lunes')
}else if(dia === 2){
   // console.log('Martes');
}else {
   // console.log('No es Lunes, Martes o Domingo...');
}

// Sin uasr If Else, o Switch, unicamente objetos.



    const diaSemana = ['Domingo','Lunes', 'Mates', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    let day = diaSemana[hoy.getDay()];
    console.log(day);

const diasLetras = {
    0 : 'Domingo',
    1 : 'Lunes', 
    2 : 'Mates', 
    3 : 'Miercoles', 
    4 : 'Jueves', 
    5 : 'Viernes', 
    6 : 'Sábado',
}
 console.log( diaSemana[dia]);