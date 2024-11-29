class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fechaHora = data.fechaHora;
        this.estatus = data.estatus;
    }

    set id(id) {
        this._id = id;
    }

    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    set fechaHora(fechaHora) {
        this._fechaHora = fechaHora;
    }

    set estatus(estatus) {
        this._estatus = estatus;
    }

    get id() {
        return this._id;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get idProducto() {
        return this._idProducto;
    }

    get fechaHora() {
        return this._fechaHora;
    }

    get estatus() {
        return this._estatus;
    }

    get getVenta() {
        const conid = {
            id: this.id,
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fechaHora: this.fechaHora,
            estatus: this.estatus
        };
        const sinid = {
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fechaHora: this.fechaHora,
            estatus: this.estatus
        };
        return this.id == undefined ? sinid : conid;
    }
}

module.exports = Venta;
