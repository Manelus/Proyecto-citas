const mongoose = require('mongoose');

const CitasModel = new mongoose.Schema({
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
    }
});
    


CitasModel.methods.toJSON = function () {
    const cita = this.toObject();
    return cita ;
}