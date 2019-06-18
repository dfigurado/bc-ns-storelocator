'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoreLocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HashCode: {
        type: Sequelize.STRING
      },
      Lat: {
        type: Sequelize.FLOAT
      },
      Lng: {
        type: Sequelize.FLOAT
      },
      LocationAddress: {
        type: Sequelize.STRING
      },
      LocationId: {
        type: Sequelize.INTEGER
      },
      LocationName: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StoreLocations');
  }
};