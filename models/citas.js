
const mongoose = require('mongoose');
const CitasModel = require('./Schema/Citas');

const CitasModel = mongoose.model('Citas', CitasModel);

module.exports = CitasModel;
