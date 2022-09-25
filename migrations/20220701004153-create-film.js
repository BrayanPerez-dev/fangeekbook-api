'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      },
      genreType: {
        type: Sequelize.INTEGER
      },
      originalLanguage: {
        type: Sequelize.INTEGER
      },
      recordingCountry: {
        type: Sequelize.INTEGER
      },
      ratingId: {
        type: Sequelize.INTEGER
      },
      distributorId: {
        type: Sequelize.INTEGER
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      budget: {
        type: Sequelize.DECIMAL
      },
      sinopsis: {
        type: Sequelize.INTEGER
      },
      boxOffice: {
        type: Sequelize.DECIMAL
      },
      rate: {
        type: Sequelize.INTEGER
      },
      trailerUrl: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Films');
  }
};