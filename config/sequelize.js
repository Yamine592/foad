const { sequelize, Sequelize } = require("sequelize");
require ("dotenv").config();

const sequelize = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

module.exports= sequelize;
