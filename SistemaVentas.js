class Producto{
    static contadorProductos = 0; 

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos; 
        this._nombre = nombre; 
        this._precio = precio; 
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre; 
    }
    set nombre(nombre){
        this._nombre = nombre; 
    }
    get precio(){
        return this._precio; 
    }
    set precio(precio){
        this._precio = precio; 
    }

    ToString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}


class Orden{
    static contadorOrdenes = 0; 

    static get MAX_PRODUCTOS(){
        return 5; 
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes; 
        this._productos = []; 
        //this._contadorProducAgregados = 0; 
    }
    get idOrden(){
        return this._idOrden; 
    }


    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); 
          //this._productos[this.contadorProducAgregados++] = producto;
        }else{
            console.log('No se pueden mas productos'); 
        }
    }


    calcularTotal(){
        let totalventa = 0;
        for(let producto of this._productos){
            //totalventa = totalventa + producto.precio;
            totalventa += producto.precio; 
        }
        return totalventa; 
    }


    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n { ' + producto.ToString() + ' }' ; 
        } 
        console.log(`Orden: ${this._idOrden}, Total ${this.calcularTotal()}, Producto: ${productoOrden} `)
    }

}


let orden1 = new Orden(); 
let producto1 = new Producto('pantalon', 200); 
let producto2 = new Producto('pantalon2', 500); 
orden1.agregarProducto(producto1); 
orden1.agregarProducto(producto2); 


let orden2 = new Orden(); 
let producto3 = new Producto('pantalon', 200); 
let producto4 = new Producto('pantalon2', 300); 
orden2.agregarProducto(producto3); 
orden2.agregarProducto(producto4); 


orden1.mostrarOrden(); 
orden2.mostrarOrden(); 