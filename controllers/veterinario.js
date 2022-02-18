const veterinario = require('../models/veterinarios');

const veterinarioController = {};

veterinarioController.getAll = async function (req, res) {
    const veterinarios = await veterinario.findAll({});
    let result = (veterinario.length > 0)? veterinarios: [{}];
    res.status(200).json(result);
}

veterinarioController.getById = async function(req, res) {
    const veterinarios = await veterinario.find({_id: req.params.id});
    let result = (veterinarios !== null)? veterinarios: {};
    res.status(200).json(result);
}

veterinarioController.veterinarioRegister = async (req, res) => {
    const { nombre, apellido} = {...req.body}
    const veterinarios = await veterinario.findByCredentials({id: id});

    if (veterinarios !== null) { return res.status(401).json({message: 'Datos erroneos'}); }
        
    let newVeterinario = await veterinario.create({id: id, nombre: nombre,apellido: apellido})
    if( newVeterinario === null) return res.status(500).json({message: 'Error interno, contacte con el admin'})
    res.status(200).json({message: 'Empleado registrado'});
}

module.exports = veterinarioController;