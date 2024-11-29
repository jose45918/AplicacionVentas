var rutas = require("express").Router();
var { nuevaVenta, mostrarVentas, buscarVentaPorID, cancelarVenta } = require("../bd/ventasBD");

rutas.post("/nuevaVenta", async (req, res) => {
    console.log("Solicitud recibida para nueva venta:", req.body);
    const resultado = await nuevaVenta(req.body);
    console.log("Resultado de la operación (nueva venta):", resultado);
    res.status(resultado.success ? 200 : 400).json(resultado);
});

rutas.get("/mostrarVentas", async (req, res) => {
    console.log("Solicitud recibida para mostrar ventas");
    const ventas = await mostrarVentas();
    console.log("Resultado de la operación (mostrar ventas):", ventas);
    res.status(200).json(ventas);
});

rutas.get("/buscarVentaPorID/:id", async (req, res) => {
    console.log("Solicitud recibida para buscar venta por ID:", req.params.id);
    const ventaValida = await buscarVentaPorID(req.params.id);
    if (ventaValida) {
        console.log("Resultado de la operación (buscar venta por ID):", ventaValida);
        res.status(200).json(ventaValida);
    } else {
        console.log("Venta no encontrada con ID:", req.params.id);
        res.status(404).json({ success: false, message: "Venta no encontrada" });
    }
});

rutas.put("/cancelarVenta/:id", async (req, res) => {
    console.log("Solicitud recibida para cancelar venta con ID:", req.params.id);
    const resultado = await cancelarVenta(req.params.id);
    console.log("Resultado de la operación (cancelar venta):", resultado);
    res.status(resultado.success ? 200 : 400).json(resultado);
});

module.exports = rutas;
