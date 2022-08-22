'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nails.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    picture: DataTypes.BLOB,
    size: DataTypes.STRING,
    shape: DataTypes.STRING,
    length: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Nails',
  });
  return Nails;
};