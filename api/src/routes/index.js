const { Router } = require('express');
const dogsRouter = require('../routes/dogsRouter.js'); 
const temperamentsRouter = require('../routes/temperamentsRouter.js'); 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


router.use('/', dogsRouter);
router.use('/', temperamentsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
