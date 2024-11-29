var rutas = require("express").Router();
var {mostrarProductos, nuevoProducto, borrarProducto, buscarPorIDproducto} = require("../bd/productosBD");

rutas.get("/mostrarProductos",async(req,res)=>{
    var productosValidos=await mostrarProductos();
    console.log(productosValidos);
    res.json(productosValidos);
});

rutas.get("/buscarPorIdproducto/:id", async(req,res)=>{
    var productoValido = await buscarPorIDproducto(req.params.id);
    res.json(productoValido);
});

rutas.delete("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado=await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto", async(req,res)=>{
    var productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

module.exports=rutas;   