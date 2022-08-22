'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomOrders.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    style1: DataTypes.BLOB,
    // style2: DataTypes.BLOB,
    shape: DataTypes.STRING,
    length: DataTypes.STRING,
    rt: DataTypes.STRING,
    ri: DataTypes.STRING,
    rm: DataTypes.STRING,
    rr: DataTypes.STRING,
    rp: DataTypes.STRING,
    lt: DataTypes.STRING,
    li: DataTypes.STRING,
    lm: DataTypes.STRING,
    lr: DataTypes.STRING,
    lp: DataTypes.STRING,
    specialRequests: DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'CustomOrders',
  });
  return CustomOrders;
};