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
        foreignKey: 'idMascota'
      });
      citas.belongsTo(models.veterinarios,{
        foreignKey: 'idVeterinario'
      });
      citas.belongsTo(models.usuarios,{
        foreignKey: 'idUser'
      });
    }
  }
  citas.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idMascota: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    idVeterinario: DataTypes.INTEGER,
    diaCita: DataTypes.INTEGER,
    horaCita: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'citas',
  });
  return citas;
};