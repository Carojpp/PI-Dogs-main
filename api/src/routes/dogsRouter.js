/* 
    Este Router va a tener las siguientes rutas 
    get -> '/dogs'
    post -> '/createDog'

    Objetivo, cruzar por el enrutador, pasar a controllers y conectarlo con sequalize
*/ 
const { Router } = require('express');
const { getDogsController } = require('../controllers/dogsController.js'); // importamos la ruta desde controller
const dogsRouter = Router();  //Instaciamos nuestro Router de express para poder agregar nuestras rutas 

console.log('loding dogsRouter');

dogsRouter.get('/dogs', (req, res) => {
  console.log('file: dogsRouter.js -> /dogs');
  const result = getDogsController() // ejecutamos la funcion getDogsController(que son los datos que tenemos desde la API que relacinamos en controller)
  res.send(result); // aca devuelve lo que le asignamos a result, el valor que da getDogsController
});

/*
  El parametro que se ejecuta sera idRaza el cual me traera la raza especifica de un perro (que es cualquier raza que yo relacione, ejemplo golden, husky)
    1. Obtener el idRaza de la variable req
    2.
  Para agregar otro tipo de parametro GET desde postman se usa la ruta que relacionamos en routes + ?otroparam=unvalor luego de la parametro que relacionamos en visual http://localhost:3001/dogs/husky?otroparam=unvalor
*/
dogsRouter.get('/dogs/:idRaza', (req, res) => {
  console.log('file: dogsRouter.js -> /dogs/:idRaza')
  const { params,query } = req
  console.log({params,query})
  //console.log(req)
  res.send ({params, route:'/dogs/:idRaza'});
});

module.exports = dogsRouter; // Retornar todo lo que esta en dogsRouter