var express = require('express');
var router = express.Router();

const veterinarioController = require('../controllers/veterinarios');

router.get('/', veterinarioController.getAll);

router.get('/id/:id', veterinarioController.getById);

router.post('/register', veterinarioController.veterinarioRegister);

module.exports = router;