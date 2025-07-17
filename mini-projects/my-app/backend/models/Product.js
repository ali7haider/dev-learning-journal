const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // optional
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'products', // optional: matches actual table name
  timestamps: false // turn off createdAt/updatedAt if not used
});

module.exports = Product;
