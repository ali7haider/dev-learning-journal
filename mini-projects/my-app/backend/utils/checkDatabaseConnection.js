// utils/checkDatabaseConnection.js
const pool = require("../db");

const checkDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
  console.log('🟢 Connected to PostgreSQL via Sequelize');
  await sequelize.sync(); // creates tables if they don't exist

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = checkDatabaseConnection;
