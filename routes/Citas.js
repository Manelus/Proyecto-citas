var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth'); 

var CitasControllers = require('../controllers/citas');
 
router.get('/', auth, CitasControllers.getall)

router.post('/register', auth, CitasControllers.citaRegister);

module.exports = router;