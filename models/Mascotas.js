'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mascotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mascotas.belongsTo(models.usuarios,{
        foreignKey: 'idUser'
      });
    }
  }
  mascotas.init({
    
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    raza: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mascotas',
  });
  return mascotas;
};