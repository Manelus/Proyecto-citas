const users = require('../models/Users');

const UsersController = {};

UsersController.getAll = (req, res) => {
    res.json(users.findAll());
};
UsersController.getById = (req, res) => {
    const id = req.params.id;
    res.json(users.findById(id));
};

exports.getAll = async function (req, res) {
    const users = await Users.find({});
    let result = (users.length > 0)? users: [{}];
    res.status(200).json(result);
}

exports.getById = async function(req, res) {
    const user = await Users.findOne({_id: req.params.id});
    let result = (user !== null)? user: {};
    res.status(200).json(result);
}

exports.userRegister = async (req, res) => {
    
    const { nombre, apellido, mail, password, direccion, telefono, rol } = {...req.body}
    const user = await Users.findByCredentials({mail: mail});
    
    if (user !== null) { return res.status(401).json({message: 'Mail Incorrecto'}); }
    
    if (password.length < 6 ) return res.status(401).json({message: 'Password incorrecto, introduce uno correcto'});
        let arrRol = ['user'];
        if (typeof roles !== 'undefined') {
            arrRol = arrRol.concat(rol);
        }
    if (telefono.length < 9 ) return res.status(401).json({message: 'telefono incorrecto, introduce uno correcto'});
        


    let users = await Users.create({nombre: nombre,apellido: apellido, mail: mail, password: password, direccion:[],telefono: telefono, rol: arrRol})
    if( users === null) return res.status(500).json({message: 'Error interno, contacte con el admin'})
    res.status(200).json({message: 'Usuario registrado'});
}

exports.userLogin =  async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await Users.findByCredentials(email, password)
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

exports.delete = async (req, res, next) => {
    try {
      const result = await Users.remove({ _id: req.params.id});
      (result > 0) ? res.status(204).json({}) : res.status(200).json({message: "El usuario a sido elimnado correctamente."});
    } catch (e) {
      res.status(500).json({message: "Eliminacion incorrecta."});
    }
}

module.exports = UsersController;