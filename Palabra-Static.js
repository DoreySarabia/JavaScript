
class Persona{
    //ATRIBUTOS ESTATICOS 

    //ATRIBUTOS DE CLASE
    static ContadorPersona = 0; 

    //ATRIBUTO DE OBJETOS
    //email = 'Valor default email';

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido; 
        if(Persona.ContadorPersona < Persona.MAX_OBJ){
        this.IdPersona = ++Persona.ContadorPersona;
    }else{
        console.log('Se ha superado el maximo de objetos');
    }
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
    ToString(){
        return this.IdPersona + ' ' + this.nombre + ' ' + this.apellido;
    }
    static saludar(){
        console.log('Saludo en metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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

let empleado1 = new Empleado('empleado1', 'apellidoem', 'sistemas');
console.log(empleado1);

let persona1 = new Persona('Nombre1', 'Apellido1');
console.log(persona1);

let persona2 = new Persona('Nombre2', 'Apellido2');
console.log(persona2);
 


/* Persona.saludar();
Persona.saludar2(persona1);

//Objeto
console.log(persona1.ContadorObjPersona);
//Clase
console.log(Persona.ContadorObjPersona);
//desde clase hija
console.log(Empleado.ContadorObjPersona);


console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email); */

console.log(persona1.ToString());
console.log(empleado1.ToString());

let persona3 = new Persona ('nombre3', 'apellido3');
console.log(persona3.ToString()); 

console.log(Persona.ContadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; 
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('otronombre', 'otroapellido'); 
let persona5 = new Persona('otronombre2', 'otroapellido2'); 
console.log(persona5.ToString());