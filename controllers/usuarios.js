
const bcrypt = require('bcrypt');
const {usuarios, mascotas, tokens, citas, veterinarios} = require('../models');
const auth = require('../middleware/auth'); 
const jwt = require("jsonwebtoken");



const UsersController = {};


UsersController.getAll = async function (req, res) {
    const user = await usuarios.findAll();
    let result = (user !== null)? user: {};
    res.status(200).json(result);
}

UsersController.getById = async function(req, res) {
    const user = await usuarios.findOne({_id: req.params.id});
    let result = (user !== null)? user: {};
    res.status(200).json(result);
}

UsersController.userRegister = async (req, res, next) => {
  
    const {nombre, apellido, email, password} = req.body;
    console.log(usuarios);
    const userExists = await usuarios.findOne({where:{email: email}});
    const cryptPass = await bcrypt.hash(password,  8);
 
    if (userExists !== null) { return res.status(401).json({message: 'email incorrecto'})};
  
    if (password.length < 6 ) return res.status(401).json({message: 'password incorrecto. Debe tener almenos 6 caracteres.'});
    
    const user = await usuarios.create({nombre: nombre, apellido: apellido, email: email, password: cryptPass});
  
    if( user === null) return res.status(500).json({message: 'Internal error. Please, let you contact with the administrator'})
    res.status(204).json({message: 'User created!!!!'});
}

UsersController.userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await usuarios.findOne({
        where:{email:email}
      })
      if (!user) {
         return res.status(401).send({error: 'Login erroneo introduce los datos correctos'})
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if(isPasswordMatch === null)return res.status(401).json("Incorrecto")
      const generarToken = jwt.sign({id:user.id, email: user.email, nombre: user.nombre}, process.env.JWT_SECRET)
      const login = await tokens.create({token: generarToken, idUser: user.id})
      res.status(200).json({ "user": {"email": user.email, "nombre": user.nombre}, token: generarToken })
   } catch (error) {
      res.status(400).send(error)
   }
}

UsersController.delete = async (req, res, next) => {
    const id = req.params.id;
    usuarios.destroy({
      where: { id: id }
    })
      .then(id => {
        if (id == 1) {
          res.send({
            message: "Usuario eliminado!"
          });
        } else {
          res.send({
            message: `no se encuentra usuario!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "no se elimina el usuario numero: " + id
        });
      });
  };
module.exports = UsersController;
