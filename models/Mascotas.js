const mongoose = require('mongoose');
const MascotaModel = require('./Schema/Mascotas');

const MascotasModel = mongoose.model('Movies', MascotaModel);

module.exports = MascotasModel;