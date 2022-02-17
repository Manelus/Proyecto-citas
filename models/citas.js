'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class citas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      citas.hasOne(models.mascotas,{
        foreignKey: 'idMascota'
      });
      citas.hasOne(models.veterinario,{
        foreignKey: 'idVeterinario'
      });
      citas.hasOne(models.usuarios,{
        foreignKey: 'idUser'
      });
    }
  }
  citas.init({
    idCita: DataTypes.INTEGER,
    idMascota: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    diaCita: DataTypes.INTEGER,
    horaCita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'citas',
  });
  return citas;
};