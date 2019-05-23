'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoreLocation = sequelize.define('StoreLocation', {
    Lat: DataTypes.FLOAT,
    Lng: DataTypes.FLOAT,
    LocationAddress: DataTypes.STRING,
    LocationName: DataTypes.STRING,
    HashCode: DataTypes.STRING
  }, {});
  StoreLocation.associate = function(models) {
    // associations can be defined here
    StoreLocation.belongsTo(model.store, {
      foreignKey:"HashCode"
    })
  };
  return StoreLocation;
};
