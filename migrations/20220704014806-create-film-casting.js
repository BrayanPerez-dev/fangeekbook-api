'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FilmCastings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      filmId: {
        type: Sequelize.INTEGER
      },
      celebrityId: {
        type: Sequelize.INTEGER
      },
      celebrityRoleId: {
        type: Sequelize.INTEGER
      },
      performanceTypeId: {
        type: Sequelize.INTEGER
      },
      character: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('FilmCastings');
  }
};