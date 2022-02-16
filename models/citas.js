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
      citas.belongsTo(models.mascotas,{
        foreignKey: 'mascotaId'
      });
      citas.belongsTo(models.veterinario,{
        foreignKey: 'veterinarioId'
      });
    }
  }
  citas.init({
    idMascota: DataTypes.INTEGER,
    diaCita: DataTypes.INTEGER,
    horaCita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'citas',
  });
  return citas;
};