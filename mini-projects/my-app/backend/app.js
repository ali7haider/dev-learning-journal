const express = require("express");
const app = express();
const PORT = 5000;
require('dotenv').config();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./db/sequelize');
const Product = require('./models/Product');

const checkDatabaseConnection = require("./utils/checkDatabaseConnection");

app.use(express.json());


app.use(cors());
app.use('/api/products',productRoutes)

const startServer = async () => {
    const dbConnected = await checkDatabaseConnection();
  
    if (!dbConnected) {
      process.exit(1); // Exit the application with failure
    }

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  };
  startServer();

