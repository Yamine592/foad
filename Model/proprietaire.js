const { Model, Datatypes } = require('sequelize');
const sequelize = require ("../config/sequelize");

class proprietaire extends Model {}

proprietaire.init(
  {
    id_proprietaire: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero_etang: {
      type: Datatypes.INTEGER,
      allowNull : false,
      unique: true,
    },
    nom: {
      type: Datatypes.STRING(50),
      allowNull: false,
      unique: true,
    }
  }
)
