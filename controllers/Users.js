const users = require('../models/Users');

const UsersController = {};

UsersController.getById = async (req, res) => {
    console.log(req.params.id)
  
    const user = await users.findOne({ _id: req.params.id })
    let result = ( user !== null )? user: {};
  
    res.json(user.simpleUser());
};

UsersController.getAll = async function (req, res) {
    const users = await users.find({});
    let result = (users.length > 0)? users: [{}];
    res.status(200).json(result);
}

UsersController.getById = async function(req, res) {
    const user = await Users.findOne({_id: req.params.id});
    let result = (user !== null)? user: {};
    res.status(200).json(result);
}

UsersController.userRegister = async (req, res) => {
    
    const { nombre, apellido, mail, password, direccion, telefono, rol } = {...req.body}
    const user = await users.findByCredentials({mail: mail});
    
    if (user !== null) { return res.status(401).json({message: 'Mail Incorrecto'}); }
    
    if (password.length < 6 ) return res.status(401).json({message: 'Password incorrecto, introduce uno correcto'});
        let arrRol = ['user'];
        if (typeof roles !== 'undefined') {
            arrRol = arrRol.concat(rol);
        }
    if (telefono.length < 9 ) return res.status(401).json({message: 'telefono incorrecto, introduce uno correcto'});
        


    let users = await users.create({nombre: nombre,apellido: apellido, mail: mail, password: password, direccion:[],telefono: telefono, rol: arrRol})
    if( users === null) return res.status(500).json({message: 'Error interno, contacte con el admin'})
    res.status(200).json({message: 'Usuario registrado'});
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