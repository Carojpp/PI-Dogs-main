/* 
    Este Router va a tener las siguientes rutas 
    get -> '/dogs'
    post -> '/createDog'
*/ 
const { Router } = require('express');

const dogsRouter = Router();  //Instaciamos nuestro Router de express para poder agregar nuestras rutas

console.log('loding dogsRouter');

dogsRouter.get('/dogs', (req, res) => {
  console.log('file: dogsRouter.js -> /dogs');
  res.send('Dogs');
});

module.exports = dogsRouter;