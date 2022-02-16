var express = require('express');
var router = express.Router();
var pedidoModel = require('../models/pedidoModel');
var MovieModel = require('../models/MovieModel');
var UserModel = require('../models/User');
var users = require('./users');
var movies = require('./movieRouter');

const auth = require('../middleware/auth'); 


router.post('/cita', Citas.CitasRegister);

module.exports = router;