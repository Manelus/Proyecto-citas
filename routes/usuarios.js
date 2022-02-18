var express = require('express');
var router = express.Router();

const UsersController = require('../controllers/users');

const auth = require('../middleware/auth'); 

router.get('/', UsersController.getAll);

router.get('/id/:id', UsersController.getById);

router.post('/register', UsersController.userRegister);

router.put('/login', auth, UsersController.userLogin);

router.delete('/:id', auth, UsersController.delete);


module.exports = router;