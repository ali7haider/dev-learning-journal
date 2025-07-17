// utils/checkDatabaseConnection.js
const sequelize = require('../db/sequelize');
const Product = require('../models/Product');
const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL via Sequelize');
    await sequelize.sync(); // creates tables if they don't exist

    return true;
  } catch (err) {
    console.log({err})
    return false;
  }
};

module.exports = checkDatabaseConnection;
