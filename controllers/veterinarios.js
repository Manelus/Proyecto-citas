const {usuarios, mascotas, tokens, citas, veterinarios} = require('../models');

const veterinarioController = {};

veterinarioController.getAll = async function (req, res) {
    const veterinario = await veterinarios.findAll();
    let result = (veterinario.length > 0)? veterinario: [];
    res.status(200).json(result);
}

veterinarioController.getById = async function(req, res) {
    const veterinario = await veterinarios.findOne({_id: req.params.id});
    let result = (veterinario !== null)? veterinario: {};
    res.status(200).json(result);
}

veterinarioController.veterinarioRegister = async function(req, res) {
    const { nombre, apellido} = {...req.body};

    const veterinario = await veterinarios.findOne({where:{nombre, apellido}})
    
    if (veterinario !== null) { return res.status(401).json({message: 'Datos erroneos'}); }
        
    let newVeterinario = await veterinarios.create({ nombre: nombre,apellido: apellido})
    if( newVeterinario === null) return res.status(500).json({message: 'Error interno, contacte con el admin'})
    res.status(200).json({message: 'Empleado registrado'});
}

module.exports = veterinarioController;