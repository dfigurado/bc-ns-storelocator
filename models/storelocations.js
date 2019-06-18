'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreLocations = sequelize.define('StoreLocations', {
    HashCode: DataTypes.STRING,
    Lat: DataTypes.FLOAT,
    Lng: DataTypes.FLOAT,
    LocationAddress: DataTypes.STRING,
    LocationId: DataTypes.INTEGER,
    LocationName: DataTypes.STRING
  }, {});
  StoreLocations.associate = function(models) {
    // associations can be defined here
  };
  return StoreLocations;
};