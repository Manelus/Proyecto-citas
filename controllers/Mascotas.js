//Importo modelo de datos
const mascotas = require('../models/mascotas');
const users = require('../models/Users');

const MascotasController = {};

MascotasController.getAll = (req, res) => {
    res.json(mascotas.findAll());
};

MascotasController.getById = (req, res) => {
    const id = req.params.id;
    res.json(mascotas.findById(id));
};

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