var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

const mascotasController = require('../controllers/mascotas');
 
router.get('/', mascotasController.getAll);

router.get('/id/:id', auth, mascotasController.getById);

router.post('/register', auth, mascotasController.mascotaRegister);

router.delete('/:id', auth, mascotasController.mascotaDelete)

module.exports = router;