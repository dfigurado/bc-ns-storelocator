'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    Email: DataTypes.STRING,
    bcClientId: DataTypes.STRING,
    bcClientSecret: DataTypes.STRING,
    HashCode: DataTypes.STRING,
    Id: DataTypes.INTEGER,
    StoreHash: DataTypes.STRING
  }, {});
  client.associate = function(models) {
    // associations can be defined here
  };
  return client;
};