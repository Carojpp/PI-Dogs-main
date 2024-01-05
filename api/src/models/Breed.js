const { DataTypes } = require("sequelize");
const { conn } = require("../db.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Breed = conn.define("breed",  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Para que el ID vaya incrementando
  },
  image: {
    type: DataTypes.STRING,
    allowNull:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull:true
  },
  height: {
    type: DataTypes.STRING,
    allowNull:true
  },
  weight: {
    type: DataTypes.STRING,
    allowNull:true
  },
  age: {
    type: DataTypes.STRING,
    allowNull:true
  },
  temperaments:{
    type: DataTypes.JSONB, // Esto porque una raza puede tener diferentes temp
    allowNull: true
  }
}, { tableName: 'breeds'});

module.exports = { 
  Breed,
};