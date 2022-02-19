const {citas} = require('../models');
const auth = require('../middleware/auth'); 

const CitasControllers = {};

CitasControllers.getall = async function (req, res){
        const cita = await citas.findAll();
        let result = cita.length ? cita: [];
        res.status(200).json(result);
}

CitasControllers.citaRegister = async (req, res, next) => {
    try {
        const { idMascota, idUser, diaCita, horaCita, idVeterinario } = req.body;

        const citaExist = await citas.findAll({
            where:{
                diaCita: diaCita,
                horaCita: horaCita
            }
        });
        
        if (citaExist.length) { 
            return res.status(401).json({message: 'ya existe una cita'});
        }
        
        const newCita = await citas.create({ idMascota, idUser, horaCita, diaCita, idVeterinario});
        res.status(200).json(newCita);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error);
    }
}

module.exports = CitasControllers;