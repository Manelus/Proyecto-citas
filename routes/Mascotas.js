var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

const MascotasController = require('../controllers/mascotas');
 
router.get('/', MascotasController.getAll);

router.get('/id/:id', MascotasController.getById);

router.post('/register', MascotasController.mascotaRegister);

router.delete('/:id', MascotasController.mascotaDelete)

module.exports = router;