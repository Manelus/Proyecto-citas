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
    }
  }
  Mascota.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mascota',
  });
  return Mascota;
};