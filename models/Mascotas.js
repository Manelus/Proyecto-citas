'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mascota.hasOne(models.usuarios,{
        foreignKey: 'id'
      });
      Mascota.belongsTo(models.citas,{
        foreignKey: 'id'
      });
    }
  }
  Mascota.init({
    
    id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    raza: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mascota',
  });
  return Mascota;
};