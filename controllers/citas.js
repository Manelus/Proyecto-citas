const citas = require('../models/citas');

const CitasControllers = {};

CitasControllers.getall = async function (req, res){
        const cita = await citas.findAll({});
        let result = (citas.length > 0)? cita: [{}];
        res.status(200).json(result);
}

CitasControllers.citaRegister = async (req, res, next) => {
    try {
        const { idMascota, idUser, diaCita, idHora, idVeterinario } = req.body;
        let dia = new Date(fecha);

        const citaExist = await citas.findAll({
            where:{
               fecha: dia
            }
        });
        if (citaExist[0] !== undefined) { 
            return res.status(401).json({message: 'ya existe una cita'});
        }
        
        const newCita = await citas.create({ idMascota: idMascota, idUser: idUser, horacita: [], diaCita: [], idVeterinario: idVeterinario});
        res.status(200).json(newCita);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = CitasControllers;