 
//C I C L O   W H I L E 

let contador = 0; 

while(contador < 3){
    console.log(contador);
    contador ++; 
}
console.log('Fin del ciclo'); 




//C I C L O   D O   W H I L E 
let contador = 0; 

do{
    console.log(contador);
    contador ++; 

}while(contador < 3);
console.log('Fin ciclo while');



//C I C L O   F O R 
for (let contador = 0; contador < 3; contador ++){
    console.log(contador);
}
console.log('Fin del ciclo for');





//B R E A K 

for (let contador = 0; contador <= 10; contador ++){
    if (contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log('Fin ciclo For');


// PROGRAMACIÓN GO - TO 


//C O N T I N U E 
//Ir a la siguiente interaccion

for (let contador = 0; contador <= 10; contador ++){
    if(contador % 2 !== 0){
        continue;
    }
    console.log(contador);
}


// L A B E L S 
inicio:
for (let contador = 0; contador <= 10; contador ++){
    if(contador % 2 !== 0){
        continue inicio;
    }
    console.log(contador);
}
