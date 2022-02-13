const mongoose = require('mongoose');

const MascotasModel = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true,
    }
});


MascotasModel.methods.toJSON = function () {
    const mascota = this.toObject();
    return mascota ;
}


module.exports = MascotasModel;