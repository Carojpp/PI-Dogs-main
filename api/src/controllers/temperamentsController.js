const express = require("express");
const axios = require("axios");
const { Temperaments } = require("../models/Temperaments.js")
const URL_API = "https://api.thedogapi.com"; // Esta es la ruta de la API que necesitamos para obtener las razas de los perros

const getTemperamentsController = async (req, res) => {
  try {
    // si la tabla temperaments tiene datos, no se ejecuta el siguiente codigo
    const result = await Temperaments.findAll(); // puedo usar findAll porque es un modelo de sequalize que se conecta a la tabla temperaments de postgres 
    if (result.length > 0) {
      return res.status(201).json({
        mensaje: "temperaments",
        entidad: result,
      });
    }
    // EL CODIGO DE ARRIBA SE EJECUTA SI HAY DATOS EN LA TABLA
    // 
    // 
    // 
    //  EL CODIGO DE ABAJO SE EJECUTA SOLO UNA VEZ SI LA TABLA DE TEMPERAMENTOS ESTA VACIA 
    // 
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    const response = await axios.get(`${URL_API}/v1/breeds`, {
      // Realiza una solicitud GET asincrónica a la URL
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_9Bhss5Zu4ygXfxx8XRyTuj7pvAgcCskGWDnKPqxuV6hFYVqdInDgZqvHXhym33Y7",
      },
    });
    let tempe = [];

    response.data.forEach(breed => {
      if (breed.temperament){
        // temperament = "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        // split(',')
        // convierte el string en una array. ['Affectionate', 'Devoted','Assertive','Dominant']
        breed.temperament.split(',').forEach(temp => { 
          tempe.push(temp.trim());
        });
      }
    });
    tempe = [...new Set(tempe)]; // Set remover los duplicados

    // guarda en la base de datos los temperamentos
    // await Temperaments.bulkCreate(
    //   tempe.map((temp) => ({ name: temp }))
    // );

    // const resp = await Temperaments.findAll();

    let tempPromises = tempe.map((temp) => Temperaments.create({ name: temp })); //  
    await Promise.all(tempPromises); // Cuando todas las promesas han sido cumplidas con exito

    const resp = await Temperaments.findAll(); // Trae todos los temperamentos
    console.log('resp ',resp.data)

    return res.status(201).json({
      mensaje: "Temperaments created",
      entidad: resp,
    });

  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
    //res.status(500).send(error.toString());
  }
};

const createTemperamentController = async (req, res) => {
  try {
    console.log('createTemperamentsController');
    console.log(req.body);
    const { name } = req.body;
    // Crear una nueva entidad
    const newTemperament = await Temperaments.create({
      name,
    });

    // Enviar respuesta
    res.status(201).json({
      mensaje: "Temperament created sucessfully",
      entidad: newTemperament,
    });
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    console.log('error',error);
    res.status(500).send(error.toString());
  }
};

module.exports = {
  createTemperamentController,
  getTemperamentsController
};
