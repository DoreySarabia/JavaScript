
//IF - ELSE



 let condicion = false; 

if(3 > 2){
    console.log("Condicion verdadera");
}else{
    console.log("Condicion falsa");
} 

// E J E M P L O   N U M E R O S 
let numero = 1;

if(numero == 1){
    console.log("Numero uno");
    console.log("Fin del IF");
}else if(numero == 2){
    console.log("Numero dos");
}else if(numero == 3){
    console.log("Numero tres");
}else if(numero == 4){
    console.log("Numero cuatro");
}else{
    console.log("Numero desconocido");
}


//E J E M P L O   E S T A C I O N E S 
let mes = 9; 
let estacion; 

if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno"
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}else{
    estacion = "Valor incorrecto";
}

console.log(estacion);


// E J E M P L O   H O R A   D E L   D I A
let hora = 9;
let saludo; 

if (hora >= 6 && hora <= 11){
    saludo = "Buenos dias";
}else if(hora >= 12 && hora <= 18){
    saludo = "Buenas tardes";
}else if (hora >= 19 && hora <= 24){
    saludo = "Buenas noches";
}else if(hora == 0 && hora <6){
    saludo = "Durmiendo";
}else{
    console.log("Hora invalida");
}
console.log(saludo);






//SWITCH 



//E J E M P L O   N U M E R O 
let numero = 4; 
let numeroTexto = 'Valor desconocido';

switch(numero){
    case 1: 
        numeroTexto = 'Numero uno';
        break;
    case 2: 
        numeroTexto = 'Numero dos';
        break;
    case 3: 
        numeroTexto = 'Numero tres';
        break;
    case 4: 
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto);



// E J E M P L O   E S T A C I O N E S
let mes = 7;
let estacion = 'Estacion desconocida';

switch(mes){
    case 1: case 2: case 12:
        estacion = 'Invierno';
    break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break; 
    default: 
    estacion = 'Valor incorrecto';
}
console.log(estacion);



