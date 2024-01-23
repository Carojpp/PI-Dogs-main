/*
Conectaremos el api y a la base de datos
*/
const express = require("express");
const axios = require("axios");
const { Breed } = require("../models/Breed.js");
const URL_API = "https://thedogapi.com/"; // Esta es la ruta de la API que necesitamos para obtener las razas de los perros

const getDogsApiController = async (req, res) => {
  try {
    const { page } = req.query
    const defaultPage = page - 1
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=8&page=${defaultPage}`, {
      // Realiza una solicitud GET asincrónica a la URL
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_9Bhss5Zu4ygXfxx8XRyTuj7pvAgcCskGWDnKPqxuV6hFYVqdInDgZqvHXhym33Y7", // Token de la API
      },
    });
   
    res.json({data:response.data});
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
  
  }
};

const getDogsLocalController = async (req, res) => {
  try {
    const {limit, page } = req.query
    console.log('getDogsLocalController ')
    
    const currentPage = Math.max(page, 1);
    const offset = (currentPage - 1) * limit; 

    console.log('query ',req.query)
    console.log('offset ',offset)
    const dogs = await Breed.findAll({ limit, offset });
    
    const response = {
      data: dogs,
    }
    res.json(response);

  } catch (error) {
    console.log('error ',error)
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
  
  }
};

//Como acceso un controlador desde la ruta? , debo importarlo en routes
const searchDogsController = async (req, res) => {
  try {
    const {limit, search } = req.query
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${search}&limit=${limit}`, {
      // Realiza una solicitud GET asincrónica a la URL
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "live_9Bhss5Zu4ygXfxx8XRyTuj7pvAgcCskGWDnKPqxuV6hFYVqdInDgZqvHXhym33Y7", // Token de la API
      },
    });

    res.json(response.data);
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    return error;
  
  }
};

const createDogController = async (req, res) => {
  try {
    console.log('createDogController');
    console.log(req.body);
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    // Extraer datos del cuerpo de la solicitud
    const { image, name, height, weight, age, temperaments } = req.body;
    // Crear una nueva entidad
    const newDog = await Breed.create({
      image,
      name,
      height,
      weight,
      age,
      temperaments
    });

    // Enviar respuesta
    res.status(201).json({
      mensaje: "Dog created sucessfully",
      entidad: newDog,
    });
  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    console.log('error',error);
    res.status(500).send(error.toString());
  }
};

const getDetailDogController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('getDetailDogController ',id);
    // se utiliza para ejecutar código que podría lanzar un error. Si ocurre un error dentro de este bloque, el control pasa al bloque catch
    // Extraer datos del cuerpo de la solicitud
    const dog = await Breed.findOne({
      where: {
        id
      }
    });
    dog.temperament =  dog.temperaments.join(", ");
    res.status(201).json({
      life_span: dog.age,
      height: dog.height,
      weight: dog.weight,
      id: dog.id,
      image: dog.image,
      name: dog.name,
      temperament: dog.temperaments.join(", "),
    });

  } catch (error) {
    // Si ocurre un error durante la solicitud (por ejemplo, un problema de red o si la API devuelve un error), el control pasa a este bloque.
    console.log('error',error);
    res.status(500).send(error.toString());
  }
}

module.exports = {
  createDogController,
  searchDogsController,
  getDogsApiController,
  getDogsLocalController,
  getDetailDogController
};