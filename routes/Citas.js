var express = require('express');
var router = express.Router();

var CitasControllers = require('../controllers/citas');
 
router.get('/', CitasControllers.getall)

router.post('/register', CitasControllers.citaRegister);

module.exports = router;