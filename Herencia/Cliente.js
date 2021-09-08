class Cliente extends Persona{

    static ContadorClientes = 0; 

    constructor(fechaRegistro){
        this._idCliente = ++Cliente.ContadorClientes; 
        this._fechaRegistro = fechaRegistro; 
    }

    get _idCliente(){
        return this._idCliente; 
    }
    get fechaRegistro(){
        return this._fechaRegistro; 
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro; 
    }
    ToString(){
        return super.ToString() + ' ' + this._idCliente + ' ' + this._fechaRegistro; 
    }

}