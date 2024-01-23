const { Router } = require('express');
const dogsRouter = require('../routes/dogsRouter.js'); 
const temperamentsRouter = require('../routes/temperamentsRouter.js'); 

// Importar todos los routers;

const router = Router();

router.use('/', dogsRouter);
router.use('/', temperamentsRouter);

// Configurar los routers

module.exports = router;
