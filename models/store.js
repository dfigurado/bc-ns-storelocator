'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    BannerImage: DataTypes.STRING,
    CreatedAt: DataTypes.DATE,
    Domain: DataTypes.STRING,
    HashCode: DataTypes.STRING,
    Id: DataTypes.INTEGER,
    Latitude: DataTypes.FLOAT,
    Longitude: DataTypes.FLOAT,
    SalesEmail: DataTypes.STRING,
    SEODescription: DataTypes.STRING,
    StoreAddress: DataTypes.STRING,
    StoreCode: DataTypes.STRING,
    StoreEmail: DataTypes.STRING,
    StoreFax: DataTypes.STRING,
    StoreHash: DataTypes.STRING,
    StorePhone: DataTypes.STRING,
    StoreServices: DataTypes.STRING,
    StoreType: DataTypes.STRING,
    UpdatedAt: DataTypes.DATE
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
  };
  return Store;
};