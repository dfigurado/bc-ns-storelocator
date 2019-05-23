'use strict';
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define('store', {
    Domain: DataTypes.STRING,
    HashCode: DataTypes.STRING,
    Id: DataTypes.INTEGER,
    StoreHash: DataTypes.STRING
  }, {});
  store.associate = function(models) {
    // associations can be defined here
    store.belongsTo(model.client, {
      foreignKey:"HashCode"
    });
  };
  return store;
};
