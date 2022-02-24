const {citas} = require('../models');
 
const CitasControllers = {};

CitasControllers.getById = async function(req, res) {
    const mascota = await citas.findOne({_id: req.params.id});
    res.status(200).json(mascota || {});
  }

CitasControllers.getall = async function (req, res){
        const cita = await citas.findAll();
        let result = cita.length ? cita: [];
        res.status(200).json(result);
}

CitasControllers.citaRegister = async (req, res, next) => {
    try {
        const { idMascota, idUser, diaCita, idVeterinario } = req.body;

        const citaExist = await citas.findAll({
            where:{
                diaCita: diaCita
            }
        });
        
        if (citaExist.length) { 
            return res.status(401).json({message: 'ya existe una cita'});
        }
        
        const newCita = await citas.create({ idMascota, idUser, diaCita, idVeterinario});
        res.status(200).json(newCita);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = CitasControllers;