'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMascota: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        reference:{
          model:"mascotas",
          key:"id",
          as: "idMascota"
        }
      },
      idUser: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        reference:{
          model:"usuarios",
          key:"id",
          as: "idUser"
        }
      },
      diaCita: {
        type: Sequelize.DATE
      },
      idVeterinario: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        reference:{
          model:"veterinarios",
          key:"id",
          as: "idVeterinario"
        }
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