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
      Lat: {
        type: Sequelize.FLOAT
      },
      Lng: {
        type: Sequelize.FLOAT
      },
      LocationAddress: {
        type: Sequelize.STRING
      },
      LocationName: {
        type: Sequelize.STRING
      },
      StoreHash: {
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