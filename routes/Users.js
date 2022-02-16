var express = require('express');
var router = express.Router();


const UsersController = require('../controllers/Users');

const auth = require('../middleware/auth'); 
const admin = require('../middleware/admin'); 

router.get('/', UsersController.getAll);

router.get('/id/:id', UsersController.getById);

router.post('/register', UsersController.userRegister);

router.put('/login', UsersController.userLogin);

router.delete('/:id', [auth, admin], UsersController.elete);


module.exports = router;