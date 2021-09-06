
//C L A S E S   E N   J S 
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido; 
    }
}


let persona1 = new Persona('Nombre1', 'Apellido1');
console.log(persona1);

let persona2 = new Persona('Nombre2', 'Apellido2');
console.log(persona2);
 



//M E T O D O   G E T  Y  S E T 

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido; 
    }
    get nombre(){
        return this._nombre;
    }
    //Modificar
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Nombre1', 'Apellido1');
persona1.nombre = 'Nombre2'; //set
console.log(persona1.nombre); //get




//H O I S T I N G 
//No es posible crear objetos antes de declarar las clases

//let persona2 = new persona('Nombre1', 'Apellido');
class Persona2{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido; 
    }
    get nombre(){
        return this._nombre;
    }
    //Modificar
    set nombre(nombre){
        this._nombre = nombre;
    }
}
let persona2 = new persona('Nombre1', 'Apellido');
console.log(persona2);





//H E R E N C I A 


class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido; 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);

        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        return this._departamento = this.departamento;
    }
}
let empleado1 = new Empleado('empleado1', 'apellidoem', 'sistemas');
console.log(empleado1);
console.log(empleado1.nombre);

console.log(empleado1.nombreCompleto());




//S O B R E E S C R I T U R A 



class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido; 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);

        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        return this._departamento = this.departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let empleado = new Empleado('empleado1', 'apellido', 'sistemas');
console.log(empleado.nombreCompleto());



