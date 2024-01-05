/* 
    Este Router va a tener las siguientes rutas 
    get -> '/temperaments'
    post -> '/createTemperament'

    Objetivo, cruzar por el enrutador, pasar a controllers y conectarlo con sequalize
*/ 
const { Router } = require('express');
const { getTemperamentsController, createTemperamentController } = require('../controllers/temperamentsController.js'); // importamos la ruta desde controller
const temperamentsRouter = Router();  //Instaciamos nuestro Router de express para poder agregar nuestras rutas 

console.log('loding temperamentsRouter');

temperamentsRouter.get('/temperaments',getTemperamentsController);

temperamentsRouter.post('/createtemperament',createTemperamentController);

module.exports = temperamentsRouter; // Retornar todo lo que esta en dogsRouter