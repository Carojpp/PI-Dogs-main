/*
Conectaremos el api y a la base de datos
*/
const express = require("express");
const axios = require("axios");
const Dog = require("../models/dog.js");
const URL_API = "https://thedogapi.com/"; // Esta es la ruta de la API que necesitamos para obtener las razas de los perros

//Como acceso un controlador desde la ruta? , debo importarlo en routes
const getDogsController = async (req, res) => {
  try {
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    const response = await axios.get("https://api.thedogapi.com/v1/breeds", {
      // Realiza una solicitud GET asincrónica a la URL
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_9Bhss5Zu4ygXfxx8XRyTuj7pvAgcCskGWDnKPqxuV6hFYVqdInDgZqvHXhym33Y7",
      },
    });
    //return response.data; // Si la solicitud es exitosa, la función devuelve los datos obtenidos de la API
    res.json(response.data); // status 200
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
    //res.status(500).send(error.toString());
  }
};

const createDogController = async (req, res) => {
  try {
    console.log('createDogController');
    console.log(req.body);
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    // Extraer datos del cuerpo de la solicitud
    const { imagen, nombre, altura, peso, anios } = req.body;
    console.log({Dog})
    // Crear una nueva entidad
    const newDog = await Dog.create({
      id:1,
      imagen,
      nombre,
      altura,
      peso,
      anios,
    });

    // Enviar respuesta
    res.status(201).json({
      mensaje: "Dog created sucessfully",
      entidad: newDog,
    });
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
    //res.status(500).send(error.toString());
  }
};

module.exports = {
  getDogsController,
  createDogController,
};
