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
    style1: {
      type: DataTypes.BLOB,
      allowNull: true,
    },

    style2: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    shape: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ri: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    li: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    specialRequests: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    
  }, {
    sequelize,
    modelName: 'CustomOrders',
  });
  return CustomOrders;
};