class Producto{
    //en JS la clase empieza con un constructor
    constructor(data){
        this.id=data.id;
        this.nombre=data.nombre;
        this.proveedor=data.proveedor;
        this.codigo=data.codigo;
        this.salt=data.salt;
        this.tipoProducto=data.tipoProducto;
    }
    set id(id){
        this._id=id;
    }
    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(nombreRegex.test(nombre)){
            this._nombre=nombre;
        }
    }
    set proveedor(proveedor){
        this._proveedor=proveedor;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }
    set salt(salt){
        this._salt=salt;
    }
    set tipoProducto(tipoProducto){
        this._tipoProducto=tipoProducto;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get proveedor(){
        return this._proveedor;
    }
    get codigo(){
        return this._codigo;
    }
    get salt(){
        return this._salt;
    }
    get tipoProducto(){
        return this._tipoProducto;
    }

    get getProducto(){
        const conid={
            id:this.id,
            nombre:this.nombre,
            proveedor:this.proveedor,
            codigo:this.codigo,
            salt:this.salt,
            tipoProducto:this.tipoProducto
        }
        const sinid={
            nombre:this.nombre,
            proveedor:this.proveedor,
            codigo:this.codigo,
            salt:this.salt,
            tipoProducto:this.tipoProducto
        }
        if(this.id==undefined){
        return sinid;
        } else {
            return conid;
        }
    }
}

module.exports = Producto;