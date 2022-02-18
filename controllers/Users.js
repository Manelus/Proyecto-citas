const users = require('../models').usuarios;
const bcrypt = require('bcrypt');


const UsersController = {};


UsersController.getAll = async function (req, res) {
    const user = await users.findAll({});
    let result = (users.length > 0)? user: [{}];
    res.status(200).json(result);
}

UsersController.getById = async function(req, res) {
    const user = await users.find({_id: req.params.id});
    let result = (user !== null)? user: {};
    res.status(200).json(result);
}

UsersController.userRegister = async (req, res) => {
<<<<<<< HEAD
    const {nombre, apellido, email, password} = req.body;
    console.log(users);
    const userExists = await users.findOne({where:{email: email}});
    const cryptPass = bcrypt.hash(password,  8);
=======
    const {email, apellido, nombre, password} = {...req.body};
    const userExists = await users.findOne({email: email});
    const cryptPass = bcrypt.hashSync
>>>>>>> a052ba30cc8a916acf9b685a57fb6338ca4a94e6
 
    if (userExists !== null) { return res.status(401).json({message: 'email incorrecto'})};
  
    if (password.length < 6 ) return res.status(401).json({message: 'password incorrecto. Debe tener almenos 6 caracteres.'});
    
    const user = await users.create({nombre: nombre, apellido: apellido, email: email, password: cryptPass});
  
    if( user === null) return res.status(500).json({message: 'Internal error. Please, let you contact with the administrator'})
    res.status(204).json({message: 'User created!!!!'});
}

UsersController.userLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await users.findByCredentials(email, password)
      if (!user) {
         return res.status(401).send({error: 'Login erroneo introduce los datos correctos'})
      }
      const token = await user.generateAuthToken();
      console.log(token);
      res.status(200).json({ "user": {"email": user.email, "name": user.name}, token })
   } catch (error) {
     console.log(error);
      res.status(400).send(error)
   }
}

UsersController.delete = async (req, res, next) => {
    const result = await users.remove({_id: req.params.id});
    if (result.deleteCount === 1){
        return res.status(200).json({"message" : "todo borrado"});
    }
    res.status(500).json({"message" : "Problemas internos"});
}

module.exports = UsersController;
