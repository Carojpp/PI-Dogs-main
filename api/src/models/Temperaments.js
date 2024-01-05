const { DataTypes } = require("sequelize");
const { conn } = require("../db.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Temperaments = conn.define("temperament",  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Para que el ID vaya incrementando
  },
  name: {
    type: DataTypes.STRING,
    allowNull:true
}
}, { tableName: 'temperaments'});

module.exports = { 
    Temperaments,
};