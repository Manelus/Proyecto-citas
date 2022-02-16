'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      idMascota: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diaCita: {
        type: Sequelize.INTEGER
      },
      horaCita: {
        type: Sequelize.INTEGER
      },
      idVeterinario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('citas');
  }
};