const mongoose = require('mongoose');

const CitasModel = new mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    Nombre_mascota: {
        type: String,
        required: true,
    },
    Dolencias: {
        type: String,
        required: true,
    },
    id_mascota: {
        type: String,
        required: true,
    },
    id_duenyo: {
        type: String,
        required: true,
    }
});
    


CitasModel.methods.toJSON = function () {
    const cita = this.toObject();
    return cita ;
}