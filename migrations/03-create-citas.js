'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      idCita: {
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
          key:"idMascota"
        }
      },
      idUser: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        reference:{
          model:"usuarios",
          key:"idUser"
        }
      },
      diaCita: {
        type: Sequelize.INTEGER
      },
      horaCita: {
        type: Sequelize.INTEGER
      },
      idVeterinario: {
        type: Sequelize.INTEGER,
        onDelete: "cascade",
        reference:{
          model:"veterinarios",
          key:"idVeterinario"
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