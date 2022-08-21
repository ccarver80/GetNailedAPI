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
    rt: DataTypes.INTEGER,
    ri: DataTypes.INTEGER,
    rm: DataTypes.INTEGER,
    rr: DataTypes.INTEGER,
    rp: DataTypes.INTEGER,
    lt: DataTypes.INTEGER,
    li: DataTypes.INTEGER,
    lm: DataTypes.INTEGER,
    lr: DataTypes.INTEGER,
    lp: DataTypes.INTEGER,
    specialRequests: DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'CustomOrders',
  });
  return CustomOrders;
};