const mongoose = require('mongoose');
const MascotaModel = require('./Schema/Mascotas');

const MascotasModel = mongoose.model('Mascotas', MascotaModel);

module.exports = MascotasModel;