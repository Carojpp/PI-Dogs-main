const { DataTypes } = require('sequelize');
//const sequelize = require('../db.js');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: { 
      type: DataTypes.INTEGER, primaryKey: true, 
    },
    imagen: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: { 
      type: DataTypes.STRING,
      allowNull: true 
    },
    altura: { 
      type: DataTypes.STRING,
      allowNull: true 
    },
    peso: { 
      type: DataTypes.STRING,
      allowNull: true 
    },
    anios: { 
      type: DataTypes.STRING,
      allowNull: true 
    }
  });
};
