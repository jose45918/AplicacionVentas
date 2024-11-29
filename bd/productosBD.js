const productosBD = require("./conexion").productos;
const { encriptarPassword, validarPassword, usuarioAutorizado, adminAutorizado} = require("../middlewares/funcionesPassword");
const Producto = require("../modelos/ProductoModelo");

function validarDatos(producto){
    var valido = false;
    if(producto.nombre!=undefined && producto.proveedor!=undefined && producto.codigo!=undefined){
        valido=true;
    }
    return valido;
}

async function mostrarProductos(){
    const productos= await productosBD.get();
    productosValidos=[];
    productos.forEach(producto => {
        const producto1=new Producto({id:producto.id,...producto.data()});
        if(validarDatos(producto1.getProducto)){
            productosValidos.push(producto1.getProducto);
        }
    });
    return productosValidos;
}

async function buscarPorIDproducto(id){
const producto=await productosBD.doc(id).get();
const producto1=new Producto({id:producto.id,...producto.data()});
var productoValido;
if (validarDatos(producto1.getProducto)){
    productoValido=producto1.getProducto;
}
return productoValido;
}

async function nuevoProducto(data) {
    const{salt,hash}=encriptarPassword(data.codigo);
    data.codigo=hash;
    data.salt=salt;
    data.tipoProducto="producto";
    const producto1=new Producto(data);
    var productoValido=false;
    if(validarDatos(producto1.getProducto)){
        await productosBD.doc().set(producto1.getProducto);
        productoValido=true;
    }
    return productoValido;
}

async function borrarProducto(id){
    var productoValido = await buscarPorIDproducto(id);
    var productoBorrado= false;  
    if (productoValido){
        await productosBD.doc(id).delete();
        productoBorrado=true;
    }
    return productoBorrado;
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorIDproducto
}

/*async function prueba(){
    console.log(await nuevoUsuario(data));
}*/

//Revisar cuando si existe el usuario, pero el usario es incorrecto

/*data={
    nombre: "mozart",
    usuario: "Requiem",
    password: "xyz"
}*/

//prueba();
//console.log(nuevoUsuario.data());
//nuevoUsuario(data);
//buscarPorID("100");
//buscarPorID("")
//mostrarUsuarios();