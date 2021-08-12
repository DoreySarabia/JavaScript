//A R R E G L O S 

const autos = ['bmw', 'mercedes', 'volvo'];
console.log(autos);


//A C C E D E R   A   E L E M E N T O S


console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i ++){
    console.log(i + ' : ' + autos[i]);
}


//M O D I F I C A R   E L E M E N T O S 


autos[1] = 'mercedesBenz';
    console.log(autos[1]);

autos.push('audi');
    console.log(autos);


//A G R E G A R   E L E M E N T O S 

console.log(autos.length);
autos[autos.length] = 'autonuevo'; 
console.log(autos);

//Indice 5 vacio
autos [6] = 'autodos'; 
console.log(autos);


//S A B E R   S I   E S   A R R A Y 

console.log(typeof autos);
console.log(Array.isArray(autos));

console.log(autos instanceof Array);