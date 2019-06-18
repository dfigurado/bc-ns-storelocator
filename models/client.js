'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    Email: DataTypes.STRING,
    StoreHash: DataTypes.STRING,
    bcClientId: DataTypes.STRING,
    bcClientSecret: DataTypes.STRING,
    HashCode: DataTypes.STRING,
    Id: DataTypes.INTEGER,
    IsActive: DataTypes.BOOLEAN
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};