const ventasBD = require("./conexion").ventas;
const Venta = require("../modelos/VentaModelo");

async function nuevaVenta(data) {
    try {
        data.fechaHora = new Date().toISOString();
        data.estatus = "vendido";
        const venta = new Venta(data);
        await ventasBD.add(venta.getVenta); // Usar add() para crear un nuevo documento
        console.log("Venta creada exitosamente:", venta.getVenta); // Mostrar información de la venta en la terminal
        return { success: true, message: "Venta creada exitosamente" };
    } catch (error) {
        console.error("Error al crear la venta:", error.message); // Mostrar el error en la terminal
        return { success: false, message: "Error al crear la venta", error: error.message };
    }
}

async function mostrarVentas() {
    try {
        const snapshot = await ventasBD.get();
        const ventas = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Ventas encontradas:", ventas); // Mostrar todas las ventas en la terminal
        return ventas;
    } catch (error) {
        console.error("Error al mostrar las ventas:", error.message); // Mostrar el error en la terminal
        return [];
    }
}

async function buscarVentaPorID(id) {
    try {
        const venta = await ventasBD.doc(id).get();
        if (!venta.exists) {
            console.log("Venta no encontrada con ID:", id); // Mostrar mensaje si no se encuentra la venta
            return null;
        }
        const ventaData = { id: venta.id, ...venta.data() };
        console.log("Venta encontrada:", ventaData); // Mostrar la venta encontrada en la terminal
        return ventaData;
    } catch (error) {
        console.error("Error al buscar la venta por ID:", error.message); // Mostrar el error en la terminal
        return null;
    }
}

async function cancelarVenta(id) {
    try {
        const venta = await ventasBD.doc(id).get();
        if (!venta.exists) {
            console.log("Venta no encontrada con ID para cancelar:", id); // Mostrar mensaje si no se encuentra la venta
            return { success: false, message: "Venta no encontrada" };
        }
        await ventasBD.doc(id).update({ estatus: "cancelado" });
        console.log("Venta cancelada exitosamente con ID:", id); // Mostrar mensaje si la venta se cancela
        return { success: true, message: "Venta cancelada exitosamente" };
    } catch (error) {
        console.error("Error al cancelar la venta:", error.message); // Mostrar el error en la terminal
        return { success: false, message: "Error al cancelar la venta", error: error.message };
    }
}

module.exports = {
    nuevaVenta,
    mostrarVentas,
    buscarVentaPorID,
    cancelarVenta,
};
