'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BannerImage: {
        type: Sequelize.STRING
      },
      CreatedAt: {
        type: Sequelize.DATE
      },
      Domain: {
        type: Sequelize.STRING
      },
      HashCode: {
        type: Sequelize.STRING
      },
      Id: {
        type: Sequelize.INTEGER
      },
      Latitude: {
        type: Sequelize.FLOAT
      },
      Longitude: {
        type: Sequelize.FLOAT
      },
      SalesEmail: {
        type: Sequelize.STRING
      },
      SEODescription: {
        type: Sequelize.STRING
      },
      StoreAddress: {
        type: Sequelize.STRING
      },
      StoreCode: {
        type: Sequelize.STRING
      },
      StoreEmail: {
        type: Sequelize.STRING
      },
      StoreFax: {
        type: Sequelize.STRING
      },
      StoreHash: {
        type: Sequelize.STRING
      },
      StorePhone: {
        type: Sequelize.STRING
      },
      StoreServices: {
        type: Sequelize.STRING
      },
      StoreType: {
        type: Sequelize.STRING
      },
      UpdatedAt: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Stores');
  }
};