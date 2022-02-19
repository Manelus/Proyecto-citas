const {usuarios, mascotas, tokens, citas, veterinarios} = require('../models');
const auth = require('../middleware/auth'); 

const MascotasController = {};

MascotasController.getAll = async function (req, res){
  const mascota = await mascotas.findAll();
  res.status(200).json(mascota);
}

MascotasController.getById = async function(req, res) {
  const mascota = await mascotas.findOne({_id: req.params.id});
  res.status(200).json(mascota || {});
}

MascotasController.mascotaRegister = async (req, res) => {
  try {
    const { nombre, tipo, raza, idUser} = req.body;
    const newMascota = await mascotas.create({nombre, tipo, raza, idUser});
    res.status(200).json(newMascota);
  } catch (error) {
    res.status(500).send('no se ha podido registrar');
  }
};

MascotasController.mascotaDelete = async (req, res, next) => {
    try {
      const result = await mascotas.destroy({ where: { id: req.params.id } });
      (result > 0) ? res.status(204).json({}) : res.status(200).json({message: "El usuario a sido elimnado correctamente."});
    } catch (e) {
      console.log(e.message);
      res.status(500).json({message: "Eliminacion incorrecta."});
    }
}

module.exports = MascotasController;