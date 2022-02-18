const auth = require('../middleware/auth');
const mascotas = require('../models/mascotas');

const MascotasController = {};

MascotasController.getAll = async function (req, res){
  const mascota = await mascotas.findAll({});
  let result = (mascotas.length > 0)? mascota: [{}];
  res.status(200).json(result);
}

MascotasController.getById = async function(req, res) {
  const mascota = await mascotas.find({_id: req.params.id});
  let result = (mascota !== null)? mascota: {};
  res.status(200).json(result);
}

MascotasController.mascotaRegister = async (req, res) => {
    
  const {nombre, tipo, raza, idUser} = {...req.body}
  const mascota = await mascotas.findByCredentials({id: id});
    
  if (mascota !== null) { return res.status(401).json({message: 'Mascota Incorrecto'}); }
    
        
  let mascotas = await mascotas.create({id: id, nombre: nombre, tipo: tipo, raza: raza, idUser: idUser});
  if( mascotas === null) return res.status(500).json({message: 'Error interno, contacte con el admin'})
  res.status(200).json({message: 'Mascota registrada'});
}

MascotasController.mascotaDelete = async (req, res, next) => {
    try {
      const result = await mascotas.remove({ _id: req.params.id});
      (result > 0) ? res.status(204).json({}) : res.status(200).json({message: "El usuario a sido elimnado correctamente."});
    } catch (e) {
      res.status(500).json({message: "Eliminacion incorrecta."});
    }
}

module.exports = MascotasController;